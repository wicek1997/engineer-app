import React from 'react';
import {Text} from '../Field';
import { useForm } from "react-hook-form";
import { UserApi } from '../../../services';
import { useDispatch } from 'react-redux';
import { alertActions } from '../../../redux';
import "./Form.scss";


export const LoginForm = () => {
  const { login, handleSubmit, watch, errors } = useForm();
  const dispatch = useDispatch();

  const onSubmit = () => {
    UserApi.login("test", "test@example.com", "12345")
    .then(response => console.log(response))
    .catch(error => {
      dispatch(alertActions.sendErrorAlert(error.message));
    });
  }
  return(
    <div className="register">
    <form classname="form" onSubmit={handleSubmit(onSubmit)}>
      <h1>Login</h1>
      <Text name="username"  errors={errors.username} help="Username" placeholder={"Enter username..."} />
      <Text name="password"  errors={errors.username} help="Password" placeholder={"Enter password..."} />
      <button className="form-button">Submit</button>
    </form>
    </div>
  )
}