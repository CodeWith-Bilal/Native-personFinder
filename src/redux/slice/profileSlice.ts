import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';
import { fireError, ProfileState } from '../../types/types';

export const updateProfileAsync = createAsyncThunk(
  'profile/updateProfile',
  async ({ name, photo }: { name: string; photo: string | null }, { rejectWithValue }) => {
    try {
      const user = auth()?.currentUser;
      if (!user) {throw new Error('User not found');}

      await user.updateProfile({ displayName: name, photoURL: photo });
      return { name, photo };
    } catch (error) {
      const Err = error as fireError;
      return rejectWithValue(Err.message || 'Failed to update profile');
    }
  }
);

const initialState: ProfileState = {
  status: 'idle',
  error: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateProfileAsync.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(updateProfileAsync.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(updateProfileAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export default profileSlice.reducer;
