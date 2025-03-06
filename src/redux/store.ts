import {configureStore} from '@reduxjs/toolkit';

import authReducer from '../redux/slice/authSlice';
import reportFormReducer from '../redux/slice/reportFormSlice';

import newsReducer from '../redux/slice/newsSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    reportForm: reportFormReducer,
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
