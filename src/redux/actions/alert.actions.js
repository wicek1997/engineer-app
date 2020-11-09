const sendSuccessAlert = message => ({ type: "SUCCESS_ALERT", payload: { message }});
const sendErrorAlert = message => ({ type: "ERROR_ALERT", payload: { message }});
const clearAlerts = () => ({ type: "CLEAR_ALERTS", payload: {}});

export const alertActions = {
  sendSuccessAlert,
  sendErrorAlert,
  clearAlerts,
};