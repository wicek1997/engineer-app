import Axios from 'axios';
//parametry takie same jak w postmanie


const axios = Axios.create({
  baseURL: `${process.env.REACT_APP_API_IP}`,
  timeout: 5000,
});

const register = ({ username, email, password }) => {
  return axios.post("http://127.0.0.1:8080/api/v1/user", {
    username,
    email,
    password,
  });
}

const login = ({ login, password }) => {
  return axios.post("http://127.0.0.1:8080/api/v1/authenticate", {
    login,
    password,
  });
}

//unikalny login i mail
const validateUser = ({ username, email }) => {
  return axios.head("http://127.0.0.1:8080/api/v1/user/user-exists?username=" + username + "&email=" + email, {
    username,
    email,
  });
}

const refreshToken = ({})

export const UserApi = {
  register, login, validateUser
};