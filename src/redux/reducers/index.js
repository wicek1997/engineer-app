import { combineReducers } from 'redux';
import { alertReducer } from './alert.reducer';
import { authReducer } from './auth.reducer';

export const rootReducer =  combineReducers({
  alert: alertReducer,
  auth: authReducer,
});