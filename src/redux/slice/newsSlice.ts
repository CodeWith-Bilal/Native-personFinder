import {createSlice} from '@reduxjs/toolkit';
import firestore from '@react-native-firebase/firestore';
import {NewsState} from '../../types/types';
import {createAsyncThunk} from '@reduxjs/toolkit';

const initialState: NewsState = {
  loading: false,
  error: null,
  reports: [],
};

export const fetchNewsWithSnapshot = createAsyncThunk(
  'news/fetchNewsWithSnapshot',
  async (_, {dispatch, rejectWithValue}) => {
    try {
      const unsubscribe = firestore()
        .collection('News')
        .orderBy('timestamp', 'desc')
        .onSnapshot(
          querySnapshot => {
            const reportList = querySnapshot.docs.map(documentSnapshot => {
              const data = documentSnapshot.data();
              return {
                id: documentSnapshot?.id,
                name: data?.fullName,
                reporter: data?.reportedBy,
                location: data?.currentLocation,
                description: data?.description,
                photoUrl: data?.photo,
              };
            });
            dispatch(fetchNewsSuccess(reportList));
          },
          () => {
            dispatch(fetchNewsFailure('Error fetching news reports'));
          },
        );

      return unsubscribe;
    } catch (error) {
      return rejectWithValue('Error setting up snapshot listener');
    }
  },
);

export const addNewsReport = createAsyncThunk(
  'news/addNewsReport',
  async (
    {
      fullName,
      photo,
      currentLocation,
      description,
      reportedBy,
    }: {
      fullName: string;
      photo: string;
      currentLocation: string;
      description: string;
      reportedBy: string | null;
    },
    {rejectWithValue},
  ) => {
    try {
      await firestore().collection('News').add({
        fullName,
        photo,
        currentLocation,
        description,
        reportedBy,
        timestamp: firestore.FieldValue.serverTimestamp(),
      });
    } catch (error) {
      return rejectWithValue('Error adding news report');
    }
  },
);

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    fetchNewsSuccess: (state, action) => {
      state.loading = false;
      state.reports = action.payload;
    },
    fetchNewsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchNewsWithSnapshot.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNewsWithSnapshot.fulfilled, state => {
        state.loading = false;
      })
      .addCase(fetchNewsWithSnapshot.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(addNewsReport.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addNewsReport.fulfilled, state => {
        state.loading = false;
      })
      .addCase(addNewsReport.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const {fetchNewsSuccess, fetchNewsFailure} = newsSlice.actions;

export default newsSlice.reducer;
