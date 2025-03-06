import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import firestore from '@react-native-firebase/firestore';
import { Profile, ReportFormState } from '../../types/types';
import { FORM_FEILD_HANDLER } from '../../constants/constants';
import { calculateAge } from '../../utils/AgeCalculator';

const initialState = {
  reportForm: {
    fullName: '',
    gender: '',
    dateOfBirth: new Date().toISOString(),
    nickname: '',
    height: '',
    weight: '',
    eyeColor: '',
    hairColor: '',
    hairLength: '',
    photo: null,
    lastSeen: '',
    lastLocation: '',
    status: 'idle',
    error: null,
  } as ReportFormState,

  filter: {
    profiles: [] as Profile[],
    filteredProfiles: [] as Profile[],
    selectedGender: null as string | null,
    searchQuery: '',
    error: null as string | null,
    loading: false,
  },

  status: 'idle',
};

export const submitReport = createAsyncThunk(
  'combined/submitReport',
  async (formData: Omit<ReportFormState, 'status' | 'error'>, { rejectWithValue }) => {
    try {
      const birthDate = new Date(formData.dateOfBirth);
      const age = calculateAge(birthDate);

      await firestore()
        .collection('Reports')
        .add({
          ...formData,
          dateOfBirth: birthDate,
          age,
          timestamp: firestore.FieldValue.serverTimestamp(),
        });

      return formData;
    } catch (error) {
      return rejectWithValue(
        'There was an error submitting the report. Please try again.'
      );
    }
  }
);

export const fetchReportsWithSnapshot = createAsyncThunk(
  'reportForm/fetchReportsWithSnapshot',
  async (_, { rejectWithValue }) => {
    try {
      const querySnapshot = await firestore()
        .collection('Reports')
        .orderBy('timestamp', 'desc')
        .get();

      const reportsData: Profile[] = querySnapshot.docs.map(doc => ({
        id: doc.id,
        fullName: doc.data()?.fullName,
        age: doc.data()?.age,
        gender: doc.data()?.gender,
        lastSeen: doc.data()?.lastSeen,
        lastLocation: doc.data()?.lastLocation,
        photo: doc.data()?.photo,
        dateOfBirth: doc.data()?.dateOfBirth || '',
        nickname: doc.data()?.nickname || '',
        height: doc.data()?.height || '',
        weight: doc.data()?.weight || '',
        hairColor: doc.data()?.hairColor || '',
        hairLength: doc.data()?.hairLength || '',
        eyeColor: doc.data()?.eyeColor || '',
      }));

      return reportsData;
    } catch (error) {
      return rejectWithValue('Error fetching profiles with snapshot');
    }
  }
);

export const uploadImageAndStore = createAsyncThunk(
  'reportForm/uploadImageAndStore',
  async (
    { imageBase64, reportId }: { imageBase64: string; reportId: string },
    { rejectWithValue }
  ) => {
    try {
      const photoURL = `data:image/jpeg;base64,${imageBase64}`;
      await firestore()
        .collection('Reports')
        .doc(reportId)
        .set(
          {
            photo: photoURL,
          },
          { merge: true }
        );
      return photoURL;
    } catch (error) {
      return rejectWithValue('Failed to upload image to Firestore.');
    }
  }
);

export const fetchReportsWithSnapshotListener = createAsyncThunk(
  'reportForm/fetchReportsWithSnapshotListener',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const unsubscribe = firestore()
        .collection('Reports')
        .orderBy('timestamp', 'desc')
        .onSnapshot(
          querySnapshot => {
            const profilesData: Profile[] = querySnapshot.docs.map(doc => ({
              id: doc.id,
              fullName: doc.data()?.fullName,
              age: doc.data()?.age,
              gender: doc.data()?.gender,
              lastSeen: doc.data()?.lastSeen,
              lastLocation: doc.data()?.lastLocation,
              photo: doc.data()?.photo,
              dateOfBirth: doc.data()?.dateOfBirth || '',
              nickname: doc.data()?.nickname || '',
              height: doc.data()?.height || '',
              weight: doc.data()?.weight || '',
              hairColor: doc.data()?.hairColor || '',
              hairLength: doc.data()?.hairLength || '',
              eyeColor: doc.data()?.eyeColor || '',
            }));
            dispatch(fetchReportsSuccess(profilesData));
          },
          () => {
            dispatch(fetchReportsFailure('Error fetching profiles'));
          }
        );

      return unsubscribe;
    } catch (error) {
      return rejectWithValue('Error setting up snapshot listener.');
    }
  }
);

const reportForm = createSlice({
  name: 'reportForm',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.filter.searchQuery = action.payload;
    },
    setSelectedGender: (state, action) => {
      state.filter.selectedGender = action.payload;
    },
    filterProfiles: state => {
      let filtered = state.filter.profiles;

      if (state.filter.selectedGender) {
        filtered = filtered.filter(
          profile =>
            profile?.gender.toLowerCase() === state.filter.selectedGender?.toLowerCase()
        );
      }

      if (state.filter.searchQuery) {
        const query = state.filter.searchQuery.toLowerCase();
        filtered = filtered.filter(
          profile =>
            profile?.fullName.toLowerCase().includes(query) ||
            profile?.lastLocation.toLowerCase().includes(query)
        );
      }

      state.filter.filteredProfiles = filtered;
    },
    updateFormField: (state, action) => {
      const { key, value } = action.payload;
      FORM_FEILD_HANDLER(state.reportForm, key, value);
    },
    resetForm: state => {
      Object.assign(state.reportForm, initialState.reportForm);
    },
    fetchReportsStart: state => {
      state.filter.loading = true;
      state.filter.error = null;
    },
    fetchReportsSuccess: (state, action) => {
      state.filter.loading = false;
      state.filter.profiles = action.payload;
      state.filter.filteredProfiles = action.payload;
    },
    fetchReportsFailure: (state, action) => {
      state.filter.loading = false;
      state.filter.error = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(submitReport.pending, state => {
        state.reportForm.status = 'loading';
        state.reportForm.error = null;
      })
      .addCase(submitReport.fulfilled, state => {
        state.reportForm.status = 'succeeded';
      })
      .addCase(submitReport.rejected, (state, action) => {
        state.reportForm.status = 'failed';
        state.reportForm.error = action.payload as string;
      })
      .addCase(fetchReportsWithSnapshot.pending, state => {
        state.filter.loading = true;
        state.filter.error = null;
      })
      .addCase(fetchReportsWithSnapshot.fulfilled, (state, action) => {
        state.filter.loading = false;
        state.filter.profiles = action.payload;
        state.filter.filteredProfiles = action.payload;
      })
      .addCase(fetchReportsWithSnapshot.rejected, (state, action) => {
        state.filter.loading = false;
        state.filter.error = action.payload as string;
      })
      .addCase(uploadImageAndStore.pending, state => {
        state.reportForm.status = 'loading';
        state.reportForm.error = null;
      })
      .addCase(uploadImageAndStore.fulfilled, (state, action) => {
        state.reportForm.status = 'succeeded';
        state.reportForm.photo = action.payload; // Update the photo in the state
      })
      .addCase(uploadImageAndStore.rejected, (state, action) => {
        state.reportForm.status = 'failed';
        state.reportForm.error = action.payload as string;
      })
      .addCase(fetchReportsWithSnapshotListener.pending, state => {
        state.filter.loading = true;
        state.filter.error = null;
      })
      .addCase(fetchReportsWithSnapshotListener.fulfilled, state => {
        state.filter.loading = false;
      })
      .addCase(fetchReportsWithSnapshotListener.rejected, (state, action) => {
        state.filter.loading = false;
        state.filter.error = action.payload as string;
      });
  },
});

export const {
  setSearchQuery,
  setSelectedGender,
  filterProfiles,
  updateFormField,
  resetForm,
  fetchReportsStart,
  fetchReportsSuccess,
  fetchReportsFailure,
} = reportForm.actions;

export default reportForm.reducer;
