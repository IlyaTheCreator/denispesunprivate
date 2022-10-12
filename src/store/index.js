import { combineReducers, configureStore } from '@reduxjs/toolkit';
import navReducer from './reducers/nav.reducer';
import rootReducer from './reducers/root.reducer';

export const store = configureStore({
  reducer: combineReducers({ root: rootReducer, nav: navReducer }),
});
