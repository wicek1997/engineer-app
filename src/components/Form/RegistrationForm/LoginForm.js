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
    .then(response => console.log(response, "ZALOGOWANO"))
    .catch(error => console.log(error));
  }

  return(
    <div className="register">
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h1>Login</h1>

      <label>Username</label>
      <Text name="username" innerRef={register({required: "Username is required."})} errors={errors.username} placeholder={"Enter username..."} />
      <div className="alert">
      {errors.username && <p>{errors.username.message}</p>}
      </div>
      
      <label>Password</label>
      <div className ="password_dotted">
      <Text name="password" errors={errors.username} innerRef={register({required: "Password is required."})} placeholder={"Enter password..."} />
      </div>
      <div className="alert">
      {errors.password && <p>{errors.password.message}</p>}
      </div>

      <button className="button_submit">Login</button>

      <Link to='/register'>
        <button className="button_submit">Register</button>
      </Link>
    </form>
    </div>
  )
}