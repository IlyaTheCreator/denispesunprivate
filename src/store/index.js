import { combineReducers, configureStore } from '@reduxjs/toolkit';
import navReducer from './reducers/nav.reducer';
import userReducer from './reducers/user.reducer.js';

export const store = configureStore({
  reducer: combineReducers({ user: userReducer, nav: navReducer }),
});
