import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  initialState: {
    token: "",
    type: "",
    id: 0,
    username: "",
    email: "",
    roles: []
  },
  name: 'user',
  reducers: {
    setUser(store, action) {
      store.token = action.payload.token;
      store.type = action.payload.type;
      store.id = action.payload.id;
      store.username = action.payload.username;
      store.email = action.payload.email;
      store.roles = action.payload.roles;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
