import { configureStore } from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query'
import { albumApi } from '../features/apiSlice';
export const store = configureStore({
  reducer: {
    [albumApi.reducerPath]: albumApi.reducer,
  },
  middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(albumApi.middleware)
});
setupListeners(store.dispatch)
