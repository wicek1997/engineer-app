import { PROJECT } from "../constants/project.constants";
import { STATUS } from "../constants/requestStatusConstants";

const jwt = localStorage.getItem('access_token');

let initialState = {
  status: STATUS.REQUESTED,
  page: 1,
  count: 0,
  items: [],
  currentProject: null
};

export const projectReducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case PROJECT.PROJECT_LIST:
      return {
        status: STATUS.LOADED,
        page: payload.page,
        count: payload.count,
        items: payload.items,
        currentProject: payload.currentProject,
      }
    default:
      return state;
  }
}
















function parseJwt(token){
  console.log("token", token);

  var base64Url = token.split('.')[1];
  console.log("base64Url ", base64Url);

  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  console.log("base64 ", base64);

  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
  console.log("jsonPayload ", jsonPayload);

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