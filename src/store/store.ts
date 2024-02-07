import userReducer from './slices/userSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});
