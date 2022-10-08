import { combineReducers, configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/root.reducer';

export const store = configureStore({
  reducer: combineReducers({ root: rootReducer }),
});
