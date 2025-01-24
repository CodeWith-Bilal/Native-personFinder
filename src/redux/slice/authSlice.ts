import { ToastAndroid } from 'react-native';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { fireError } from '../../types/types';
import { AuthState } from '../../types/types';

const initialState: AuthState = {
  loading: false,
  error: null,
  success: false,
  user: null,
};

// interface Auth {
//   user: {
//     uid: string;
//     email: string | null;
//     displayName: string | null;
//     photoURL: string | null;
//   };
// }

GoogleSignin.configure({
  webClientId: '578891259540-ep9m1tn5di0rkiv6if3ntomi7tlcs86n.apps.googleusercontent.com', // Replace with your client ID
  offlineAccess: true, // If you need server-side authentication
});


// Regular functions instead of async thunks

// Login function
export const loginUser = async (email: string, password: string) => {
  try {
    const response = await auth().signInWithEmailAndPassword(email, password);
    const { uid, email: userEmail, displayName, photoURL } = response?.user;
    return { uid, email: userEmail, displayName, photoURL };
  } catch (err) {
    const error = err as fireError;
    ToastAndroid.show('Login failed. Please check your credentials or register.', ToastAndroid.LONG);
    throw error?.message;
  }
};

// Google login function
export const googleLogin = async () => {
  try {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    const signInResponse = await GoogleSignin.signIn();
    const { data } = signInResponse;

    if (!data?.idToken) {
      throw new Error('Google Sign-In failed: idToken is null.');
    }

    const googleCredential = auth.GoogleAuthProvider.credential(data.idToken);
    const response = await auth().signInWithCredential(googleCredential);
    const { uid, email, displayName, photoURL } = response?.user;

    return { uid, email, displayName, photoURL };
  } catch (err) {
    const error = err as fireError;
    ToastAndroid.show('Google login failed. Please try again.', ToastAndroid.LONG);
    throw error.message || 'An unknown error occurred';
  }
};

// Register function
export const registerUser = async (email: string, password: string, username: string) => {
  try {
    const response = await auth().createUserWithEmailAndPassword(email, password);
    const user = response?.user;

    await user.updateProfile({ displayName: username });
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
    ToastAndroid.show('Email Already Exist. Try again later', ToastAndroid.LONG);
    throw (err as fireError)?.message;
  }
};

// Forgot password function
export const forgotPassword = async (email: string) => {
  try {
    await auth().sendPasswordResetEmail(email);
    ToastAndroid.show('Reset email sent! Check your inbox.', ToastAndroid.LONG);
  } catch (err) {
    ToastAndroid.show('Password reset email not sent. Please try again.', ToastAndroid.LONG);
    throw (err as fireError)?.message;
  }
};


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
});

export const { logout, clearError, clearState, login, setLoading, setError, setSuccess } = authSlice.actions;

export default authSlice.reducer;
