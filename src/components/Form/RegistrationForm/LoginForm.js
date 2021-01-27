import React from 'react';
import {Text} from '../Field';
import { useForm } from "react-hook-form";
import { UserApi } from '../../../services';
import { createDispatchHook, useDispatch } from 'react-redux';
import { StaticRouter, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./Form.scss";
import { alertActions,
  authReducer,
  authActions } from '../../../redux';





export const LoginForm = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = data => {
    console.log(data, " logowanie");

    UserApi.login(data)
    .then((response) => response.data)
    .then(data =>{
      console.log(data, "ZALOGOWANO");

      localStorage.setItem("access_token", data.payload.access_token);
      
      dispatch(authActions.loginSuccess({jwt: data.payload.access_token}));
      history.push('/account');
    })
    .catch((error) => {
      dispatch(alertActions.sendErrorAlert("Blad logowania."))
      console.log(error, " cos jest nie tak.")
    });
  }


  return(
    <div className="register">
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h1>Login</h1>

      <label>Username</label>
      <Text name="login" innerRef={register({required: "Username is required."})} errors={errors.username} placeholder={"Enter username..."} />
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
        <button className="button_submit">Create account</button>
      </Link>
    </form>
    </div>
  )
}