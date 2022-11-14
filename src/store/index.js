import { combineReducers, configureStore } from '@reduxjs/toolkit';
import navReducer from './reducers/nav.reducer';
import userReducer from './reducers/user.reducer.js';

const loadState = () => {
  try {
    const serializedUser = localStorage.getItem('user');

    if (!serializedUser) {
      return undefined;
    }

    return { user: JSON.parse(serializedUser) };
  } catch (e) {
    return undefined;
  }
};

export const store = configureStore({
  reducer: combineReducers({ user: userReducer, nav: navReducer }),
  preloadedState: loadState(),
});
