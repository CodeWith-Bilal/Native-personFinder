import {ToastAndroid} from 'react-native';
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {fireError} from '../../types/types';
import {AuthState} from '../../types/types';
import {GOOGLE_CLIENT_ID} from '@env';

const initialState: AuthState = {
  loading: false,
  error: null,
  success: false,
  user: null,
  status: 'idle',
};

GoogleSignin.configure({
  webClientId: GOOGLE_CLIENT_ID,
  offlineAccess: true,
});

export const registerUser = async (
  email: string,
  password: string,
  username: string,
) => {
  try {
    const response = await auth().createUserWithEmailAndPassword(
      email,
      password,
    );
    const user = response?.user;

    await user.updateProfile({displayName: username});
    await firestore().collection('User').doc(user?.uid).set({
      username: username,
      email: email.toLowerCase(),
    });

    const serializableUser = {
      uid: user?.uid,
      displayName: user?.displayName,
      email: user?.email,
      phoneNumber: user?.phoneNumber,
      photoURL: user?.photoURL,
    };

    return serializableUser;
  } catch (err) {
    ToastAndroid.show('Invalid Properties. Try agin later', ToastAndroid.LONG);
    throw (err as fireError)?.message;
  }
};

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await auth().signInWithEmailAndPassword(email, password);
    const {uid, email: userEmail, displayName, photoURL} = response?.user;
    return {uid, email: userEmail, displayName, photoURL};
  } catch (err) {
    const error = err as fireError;
    ToastAndroid.show(
      'Login failed. Please check your credentials or register.',
      ToastAndroid.LONG,
    );
    throw error?.message;
  }
};


export const googleLogin = async () => {
  try {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});

    await GoogleSignin.signOut();

    const signInResponse = await GoogleSignin.signIn();
    const {data} = signInResponse;

    if (!data?.idToken) {
      throw new Error('Google Sign-In failed: idToken is null.');
    }

    const googleCredential = auth.GoogleAuthProvider.credential(data.idToken);
    const response = await auth().signInWithCredential(googleCredential);
    const {uid, email, displayName, photoURL} = response?.user;

    return {uid, email, displayName, photoURL};
  } catch (err) {
    const error = err as fireError;
    ToastAndroid.show(
      'Google login failed. Please try again.',
      ToastAndroid.LONG,
    );
    throw error.message || 'An unknown error occurred';
  }
};

export const forgotPassword = async (email: string) => {
  try {
    await auth().sendPasswordResetEmail(email);
    ToastAndroid.show('Reset email sent! Check your inbox.', ToastAndroid.LONG);
  } catch (err) {
    ToastAndroid.show(
      'Password reset email not sent. Please try again.',
      ToastAndroid.LONG,
    );
    throw (err as fireError)?.message;
  }
};
export const updateProfileAsync = createAsyncThunk(
  'profile/updateProfile',
  async (
    {name, photo}: {name: string; photo: string | null},
    {rejectWithValue},
  ) => {
    try {
      const user = auth()?.currentUser;
      if (!user) {
        throw new Error('User not found');
      }

      await user.updateProfile({displayName: name, photoURL: photo});
      return {name, photo};
    } catch (error) {
      const Err = error as fireError;
      return rejectWithValue(Err.message || 'Failed to update profile');
    }
  },
);
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
    },
    clearError(state) {
      state.error = null;
    },
    clearState(state) {
      state.loading = false;
      state.error = null;
      state.success = false;
    },
    login(state, action: PayloadAction<AuthState['user']>) {
      state.loading = false;
      state.user = action.payload;
      ToastAndroid.show('Login successful!', ToastAndroid.LONG);
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    setSuccess(state, action: PayloadAction<boolean>) {
      state.success = action.payload;
    },
  },
  extraReducers: builder => {
      builder
        .addCase(updateProfileAsync.pending, state => {
          state.status = 'loading';
          state.error = null;
        })
        .addCase(updateProfileAsync.fulfilled, state => {
          state.status = 'succeeded';
        })
        .addCase(updateProfileAsync.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.payload as string;
        });
    },
});

export const {
  logout,
  clearError,
  clearState,
  login,
  setLoading,
  setError,
  setSuccess,
} = authSlice.actions;

export default authSlice.reducer;
