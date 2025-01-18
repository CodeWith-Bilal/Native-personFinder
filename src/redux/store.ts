import {configureStore} from '@reduxjs/toolkit';

import authReducer from './slice/authSlice';
import profileReducer from './slice/profileSlice';
import reportFormReducer from './slice/reportFormSlice';
import filterReportReducer from './slice/filterReportSlice';

import newsReducer from './slice/newsSlice';

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
