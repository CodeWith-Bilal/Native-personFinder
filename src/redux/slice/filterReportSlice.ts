import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import firestore from '@react-native-firebase/firestore';
import {Profile} from '../../types/types';

export const fetchReports = createAsyncThunk(
  'filterReport/fetchReports',
  async () => {
    const querySnapshot = await firestore()
      .collection('Reports')
      .orderBy('timestamp', 'desc')
      .get();
    const reportsData = querySnapshot.docs.map(doc => ({
      id: doc?.id,
      fullName: doc?.data()?.fullName,
      age: doc?.data()?.age,
      gender: doc?.data()?.gender,
      lastSeen: doc?.data()?.lastSeen,
      lastLocation: doc?.data()?.lastLocation,
      photo: doc?.data()?.photo,
      dateOfBirth: doc?.data()?.dateOfBirth || '',
      nickname: doc?.data()?.nickname || '',
      height: doc?.data()?.height || '',
      weight: doc?.data()?.weight || '',
      hairColor: doc?.data()?.hairColor || '',
      hairLength: doc?.data()?.hairLength || '',
      eyeColor: doc?.data()?.eyeColor || '',
    }));
    return reportsData;
  },
);

const filterReportSlice = createSlice({
  name: 'filterReport',
  initialState: {
    profiles: [] as Profile[],
    filteredProfiles: [] as Profile[],
    selectedGender: null as string | null,
    searchQuery: '',
    error: null as string | null,
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setSelectedGender: (state, action) => {
      state.selectedGender = action.payload;
    },
    filterProfiles: state => {
      let filtered = state.profiles;

      if (state.selectedGender) {
        filtered = filtered.filter(
          profile =>
            profile?.gender.toLowerCase() ===
            state.selectedGender?.toLowerCase(),
        );
      }

      if (state.searchQuery) {
        const query = state.searchQuery.toLowerCase();
        filtered = filtered.filter(
          profile =>
            profile?.fullName.toLowerCase().includes(query) ||
            profile?.lastLocation.toLowerCase().includes(query),
        );
      }

      state.filteredProfiles = filtered;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchReports.fulfilled, (state, action) => {
      state.profiles = action.payload;
      state.filteredProfiles = action.payload;
    });
    builder.addCase(fetchReports.rejected, (state) => {
      state.error = 'Error fetching profiles';
    });
  },
});

export const {setSearchQuery, setSelectedGender, filterProfiles} =
  filterReportSlice.actions;

export default filterReportSlice.reducer;
