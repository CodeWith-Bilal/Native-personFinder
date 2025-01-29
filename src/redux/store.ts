import {configureStore} from '@reduxjs/toolkit';

import authReducer from '../redux/slice/authSlice';
import profileReducer from '../redux/slice/profileSlice';
import reportFormReducer from '../redux/slice/reportFormSlice';
import filterReportReducer from '../redux/slice/filterReportSlice';

import newsReducer from '../redux/slice/newsSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    reportForm: reportFormReducer,
    filterReport: filterReportReducer,
    news: newsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
