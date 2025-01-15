// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface User {
//   email: string | null;
//   name: string | null;
// }

// interface AuthState {
//   user: User | null;
//   isLoggedIn: boolean;
// }

// const initialState: AuthState = {
//   user: null,
//   isLoggedIn: false,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     setUser: (state, action: PayloadAction<User>) => {
//       state.user = action.payload;
//       state.isLoggedIn = true;
//     },
//     clearUser: (state) => {
//       state.user = null;
//       state.isLoggedIn = false;
//     },
//   },
// });

// export const { setUser, clearUser } = authSlice.actions;
// export default authSlice.reducer;

import { useState } from 'react';
import { auth } from '../../services/firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';

const useAuth = () => {
  const [loading, setLoading] = useState(false);

  const signUp = async (email: string, password: string, name: string) => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Update user profile with the name
      await updateProfile(user, { displayName: name });

      setLoading(false);
      return { success: true, user };
    } catch (error: any) {
      setLoading(false);
      return { success: false, error: error.message };
    }
  };

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
      return { success: true, user: userCredential.user };
    } catch (error: any) {
      setLoading(false);
      return { success: false, error: error.message };
    }
  };

  return { signUp, login, loading };
};

export default useAuth;
