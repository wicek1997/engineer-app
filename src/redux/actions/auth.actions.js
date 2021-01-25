const loginSuccess = payload => ({ type: "LOGIN_SUCCESS", payload });
const logoutSuccess = payload => ({ type: "LOGOUT", payload });


export const authActions = {
    loginSuccess,
    logoutSuccess,
}; 