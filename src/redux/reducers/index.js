import { combineReducers } from 'redux';
import { alertReducer } from './alert.reducer';

export const rootReducer =  combineReducers({
  alert: alertReducer,
});