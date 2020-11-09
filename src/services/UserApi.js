import Axios from 'axios';

const axios = Axios.create({
  baseURL: `${process.env.REACT_APP_API_IP}`,
  timeout: 5000,
});

const register = ({ username, email, password }) => {
  return axios.post("/api/v1/user", {
    username,
    email,
    password
  });
}

const login = ({ username, email, password }) => {
  return axios.post("/api/v1/user", {
    username,
    email,
    password
  });
}

export const UserApi = {
  register, login
};