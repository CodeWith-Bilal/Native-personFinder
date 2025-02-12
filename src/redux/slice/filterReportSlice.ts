import {createSlice} from '@reduxjs/toolkit';
import firestore from '@react-native-firebase/firestore';
import {Profile} from '../../types/types';
import {AppDispatch} from '../store'; // Adjust the import according to your store setup

const filterReportSlice = createSlice({
  name: 'filterReport',
  initialState: {
    profiles: [] as Profile[],
    filteredProfiles: [] as Profile[],
    selectedGender: null as string | null,
    searchQuery: '',
    error: null as string | null,
    loading: false,
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
    fetchReportsStart: state => {
      state.loading = true;
      state.error = null;
    },
    fetchReportsSuccess: (state, action) => {
      state.loading = false;
      state.profiles = action.payload;
      state.filteredProfiles = action.payload;
    },
    fetchReportsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  setSearchQuery,
  setSelectedGender,
  filterProfiles,
  fetchReportsStart,
  fetchReportsSuccess,
  fetchReportsFailure,
} = filterReportSlice.actions;

export const fetchReports =
  () =>
  async (dispatch: AppDispatch): Promise<void> => {
    dispatch(fetchReportsStart());

    try {
      const querySnapshot = await firestore()
        .collection('Reports')
        .orderBy('timestamp', 'desc')
        .get();

      const reportsData: Profile[] = querySnapshot.docs.map(doc => ({
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

      dispatch(fetchReportsSuccess(reportsData));
    } catch (error) {
      dispatch(fetchReportsFailure('Error fetching profiles'));
    }
  };

export default filterReportSlice.reducer;
