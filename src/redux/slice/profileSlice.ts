import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';
import {ProfileState} from '../../types/types';

const initialState: ProfileState = {
  status: 'idle',
  error: null,
};

export const updateProfileAsync = createAsyncThunk(
  'profile/updateProfile',
  async ({name, photo}: {name: string; photo: string | null}) => {
    const user = auth()?.currentUser;
    if (user) {
      await user?.updateProfile({
        displayName: name,
        photoURL: photo,
      });
    }
    return {name, photo};
  },
);

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
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
        state.error = action.error.message || 'Failed to update profile';
      });
  },
});

export default profileSlice.reducer;
