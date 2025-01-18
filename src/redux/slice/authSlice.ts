import {ToastAndroid} from 'react-native';
import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {createSelector} from 'reselect';
import {fireError} from '../../types/types';
import {AuthState} from '../../types/types';

const initialState: AuthState = {
  loading: false,
  error: null,
  success: false,
  user: null,
};

GoogleSignin.configure({
  webClientId: '578891259540-ep9m1tn5di0rkiv6if3ntomi7tlcs86n.apps.googleusercontent.com',
});

export const loginAsync = createAsyncThunk<
  AuthState['user'],
  {email: string; password: string},
  {rejectValue: string}
>('auth/loginAsync', async ({email, password}, {rejectWithValue}) => {
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
    return rejectWithValue(error?.message);
  }
});

export const googleLoginAsync = createAsyncThunk<
  AuthState['user'],
  void,
  {rejectValue: string}
>('auth/googleLoginAsync', async (_, {rejectWithValue}) => {
  try {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    const response = await auth().signInWithCredential(googleCredential);
    const {uid, email, displayName, photoURL} = response?.user;
    return {uid, email, displayName, photoURL};
  } catch (err) {
    const error = err as fireError;

    ToastAndroid.show(
      'Google login failed. Please try again.',
      ToastAndroid.LONG,
    );
    return rejectWithValue(error?.message);
  }
});

export const registerAsync = createAsyncThunk<
  AuthState['user'],
  {email: string; password: string; username: string},
  {rejectValue: string}
>(
  'auth/registerAsync',
  async ({email, password, username}, {rejectWithValue}) => {
    try {
      const response = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      const user = response?.user;

      await user.updateProfile({
        displayName: username,
      });

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
      const error = err as fireError;

      ToastAndroid.show(
        'Registration failed. Please try again.',
        ToastAndroid.LONG,
      );
      return rejectWithValue(error?.message);
    }
  },
);

export const forgotPasswordAsync = createAsyncThunk<
  void,
  {email: string},
  {rejectValue: string}
>('auth/forgotPasswordAsync', async ({email}, {rejectWithValue}) => {
  try {
    await auth().sendPasswordResetEmail(email);
  } catch (err) {
    const error = err as fireError;
    ToastAndroid.show(
      'Password reset email not sent. Please try again.',
      ToastAndroid.LONG,
    );
    return rejectWithValue(error?.message);
  }
});

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
  },
  extraReducers: builder => {
    builder

      .addCase(loginAsync.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        loginAsync.fulfilled,
        (state, action: PayloadAction<AuthState['user']>) => {
          state.loading = false;
          state.user = action.payload;
          ToastAndroid.show('Login successful!', ToastAndroid.LONG);
        },
      )
      .addCase(loginAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Login failed';
      })

      .addCase(googleLoginAsync.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        googleLoginAsync.fulfilled,
        (state, action: PayloadAction<AuthState['user']>) => {
          state.loading = false;
          state.user = action.payload;
          ToastAndroid.show('Google login successful!', ToastAndroid.LONG);
        },
      )
      .addCase(googleLoginAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Google login failed';
      })

      .addCase(registerAsync.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        registerAsync.fulfilled,
        (state, action: PayloadAction<AuthState['user']>) => {
          state.loading = false;
          state.user = action.payload;
          ToastAndroid.show('Registration successful!', ToastAndroid.LONG);
        },
      )
      .addCase(registerAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Registration failed';
      })

      .addCase(forgotPasswordAsync.pending, state => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(forgotPasswordAsync.fulfilled, state => {
        state.loading = false;
        state.success = true;
        ToastAndroid.show(
          'Reset email sent! Check your inbox.',
          ToastAndroid.LONG,
        );
      })
      .addCase(forgotPasswordAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to send reset email';
      });
  },
});

export const {logout, clearError, clearState} = authSlice.actions;
export default authSlice.reducer;

export const selectForgotPasswordState = createSelector(
  state => state.forgotPassword,
  forgotPassword => ({
    ...forgotPassword,
  }),
);
