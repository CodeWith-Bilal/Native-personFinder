import {createSlice} from '@reduxjs/toolkit';
import firestore from '@react-native-firebase/firestore';
import {fireError} from '../../types/types';
import {NewsState} from '../../types/types';
import {ThunkAction} from 'redux-thunk';
import {AnyAction} from 'redux';
import {RootState} from '../store';

const initialState: NewsState = {
  loading: false,
  error: null,
};

interface AddNewsReportParams {
  fullName: string;
  photo: string;
  currentLocation: string;
  description: string;
  reportedBy: string | null;
}

export const addNewsReport =
  ({
    fullName,
    photo,
    currentLocation,
    description,
    reportedBy,
  }: AddNewsReportParams): ThunkAction<void, RootState, unknown, AnyAction> =>
  async dispatch => {
    try {
      dispatch(addNewsReportStart());

      await firestore().collection('News').add({
        fullName,
        photo,
        currentLocation,
        description,
        reportedBy,
        timestamp: firestore.FieldValue.serverTimestamp(),
      });

      dispatch(addNewsReportSuccess());
    } catch (err) {
      const error = err as fireError;
      dispatch(addNewsReportFailure(error?.message));
    }
  };
const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    addNewsReportStart: state => {
      state.loading = true;
      state.error = null;
    },
    addNewsReportSuccess: state => {
      state.loading = false;
    },
    addNewsReportFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {addNewsReportStart, addNewsReportSuccess, addNewsReportFailure} =
  newsSlice.actions;

export default newsSlice.reducer;
