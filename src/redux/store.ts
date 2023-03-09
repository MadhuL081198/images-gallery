import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from "./counterSlice"
import imagesReducer from "./imagesSlice"
import { imagesApi } from './imagesApi';
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    images: imagesReducer,
    [imagesApi.reducerPath]: imagesApi.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(imagesApi.middleware),
});

setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
