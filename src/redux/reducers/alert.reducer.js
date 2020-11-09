import { alertConstants } from "../constants/alert.constants";

const initialState = {
  message: null,
  type: null,
};

export const alertReducer = (state = initialState, { type, payload}) => {
  switch(type) {
    case alertConstants.SUCCESS_ALERT:
      return {
        message: payload.message,
        type,
      }
    case alertConstants.ERROR_ALERT:
      return {
        message: payload.message,
        type,
      }
    case alertConstants.CLEAR_ALERTS:
      return {
        message: null,
        type: null,
      }
    default:
      return state;
  }
}