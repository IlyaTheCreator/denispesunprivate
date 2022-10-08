import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  initialState: { name: 'iluha' },
  name: 'root',
  reducers: {
    setName(store, action) {
      store.name = action.payload;
    },
  },
});

export const { setName } = appSlice.actions;
export default appSlice.reducer;
