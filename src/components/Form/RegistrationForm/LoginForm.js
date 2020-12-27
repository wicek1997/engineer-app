import React from 'react';
import {Text} from '../Field';
import { useForm } from "react-hook-form";
import { UserApi } from '../../../services';
import { useDispatch } from 'react-redux';
import { alertActions } from '../../../redux';
import { Link } from 'react-router-dom';
import "./Form.scss";


export const LoginForm = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const dispatch = useDispatch();

  const onSubmit = data => {
    console.log(data);
    UserApi.login(data)
    .then(response => console.log(response))
    .catch(error => console.log(error));
  }

  return(
    <div className="register">
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h1>Login</h1>
      <label>Username</label>
      <Text name="login" errors={errors.username} innerRef={register({required: true})} placeholder={"Enter username..."} />
      <label>Password</label>
      <Text name="password" errors={errors.username} innerRef={register({required: true})} placeholder={"Enter password..."} />
      <button className="button_submit">Login</button>
      <Link to='/register'>
        <button className="button_submit">Register</button>
      </Link>
    </form>
    </div>
  )
}