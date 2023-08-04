import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addItemFav: (state, action) => {
      state.items.push(action.payload);
    },
		removeItem(state, action) {
			state.items=state.items.filter((obj) => obj.id !== action.payload);
		},
  },
});

export const { addItemFav, removeItem } = favoriteSlice.actions;
export default favoriteSlice.reducer;
