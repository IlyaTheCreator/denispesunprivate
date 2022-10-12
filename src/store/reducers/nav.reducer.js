import { createSlice } from '@reduxjs/toolkit';

const navSlice = createSlice({
  initialState: { isOpened: true },
  name: 'nav',
  reducers: {
    toggleNav(store) {
      store.isOpened = !store.isOpened;
    },
  },
});

export const { toggleNav } = navSlice.actions;
export default navSlice.reducer;
