import { createSlice } from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';
import { fireError, ProfileState } from '../../types/types';

const initialState: ProfileState = {
  status: 'idle',
  error: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    // Replacing updateProfileAsync with a normal reducer that uses try-catch
    updateProfile: (state, action) => {
      state.status = 'loading'; // Set loading state before submitting
      state.error = null;

      const { name, photo } = action.payload;
      try {
        const user = auth()?.currentUser;
        if (user) {
          // Updating profile
          user
            .updateProfile({
              displayName: name,
              photoURL: photo,
            })
            .then(() => {
              state.status = 'succeeded'; // Successfully updated profile
            })
            .catch((error) => {
              state.status = 'failed'; // If there's an error
              state.error = error.message || 'Failed to update profile';
            });
        } else {
          state.status = 'failed';
          state.error = 'User not found';
        }
      } catch (error) {
        const Err = error as fireError;
        state.status = 'failed';
        state.error =  Err.message || 'Failed to update profile';
      }
    },
  },
});

export const { updateProfile } = profileSlice.actions;
export default profileSlice.reducer;
