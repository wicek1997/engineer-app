import { AUTH } from "../constants/auth.constants";

const jwt = localStorage.getItem('access_token');

let initialState = {};

if(jwt) {
  const jwtPayload = ''; // Decode JWT 
  jwtPayload = parseJwt(jwtPayload);

  initialState = {
    isAuthenticated: true,
    user: {
      username: jwtPayload.sub,
      id: jwtPayload.payload.user_id,
      roles: jwtPayload.payload.roles,
    }
  };
} else {
  initialState = {
    isAuthenticated: false,
    user: null,
  }
}

export const authReducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case AUTH.LOGIN_SUCCESS:
      const jwtPayload = parseJwt(payload.jwt);
      return {
        isAuthenticated: true,
        user: {
          username: jwtPayload.sub
        },
        token: {
          value: payload.jwt,
          expires: timestampToDate(jwtPayload.exp),
        }
      }
    case AUTH.LOGOUT:
      const removeJwt = localStorage.removeItem('access_token')
      return {
        removeJwt,
        isAuthenticated: false,
      }
    default:
      return state;
  }
}


function parseJwt(token){
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
}


function timestampToDate(formattedTime){
  let unix_timestamp = 1549312452
  var date = new Date(unix_timestamp * 1000);
  var hours = date.getHours();
  var minutes = "0" + date.getMinutes();
  var seconds = "0" + date.getSeconds();

  formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

  return formattedTime;
}