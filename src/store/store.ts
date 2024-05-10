import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { mainSlice } from './mainSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { mainApi } from '../api/mainApi';

export const rootReducer = combineReducers({
  [mainApi.reducerPath]: mainApi.reducer,

  main: mainSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(mainApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
