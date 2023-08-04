import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slices/cartSlice';
import favoriteSlice from './slices/favoriteSlice';
import userSlice from './slices/userSlice';
import formSlice from './slices/formSlice';

export const store = configureStore({
  reducer: {
    cartSlice,
    favoriteSlice,
    userSlice,
		formSlice,
  },
});
