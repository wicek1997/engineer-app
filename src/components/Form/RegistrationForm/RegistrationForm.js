import React, { useEffect, useState } from "react";
import {Text} from '../Field';
import { useForm } from "react-hook-form";
import { UserApi } from '../../../services';
import { useDispatch } from 'react-redux';
import { alertActions } from '../../../redux';
import { Link } from 'react-router-dom';
import "./Form.scss";


export const RegistrationForm = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const dispatch = useDispatch();
  const [lastTestedUsername, setLastTestedUsername] = useState();
  
  const watchPassword = watch('password'); 
  const watchPasswordRepeat = watch('passwordRepeat');

  
  const onSubmit = data => {
    UserApi.validateUser(data).then(response => {
      console.log(response.status, "user jest unikatowy.");
          
    });

    //czy hasla sa takie same ale to watchem trzeba zrobic
    if(data.password === data.passwordRepeat){
      console.log(data, "\ndane do logowania");
      UserApi.register(data)
        .then(response => response.data)
        .then(data => console.log(data, "dodano do bazy."))
        .catch((error) => {

          let errorType = error.response.status;
          switch(errorType)
          {
            case 400:
              console.log(errorType, "Problem jest.");
              break;
            case 404:
              console.log(errorType, "Dodano do bazy.");
              break;
            case 500:
              console.log(errorType, "Problem z polaczeniem.");
              break;
          }             
        });  
    }
    else{
      //dorobic alert jakis 
      console.log("haslo bledne");
    }
  }

  return(
    <div className="register">
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
    <h1>Register</h1>
 
      <label>Username</label>
      <Text name="username" innerRef={register({required: "Username is required.", minLength: {value: 4, message: "Username too short, minimum 4 characters."}})} errors={errors.username} placeholder={"Enter username..."} />
      <div className="alert">
      {errors.username && <p>{errors.username.message}</p>}
      </div>
      
      <label>Email</label>
      <Text name="email" innerRef={register({required: "Wrong email.", pattern: /^\S+@\S+$/i})} errors={errors.email} placeholder={"Enter email..."} />
      <div className="alert">
      {errors.email && errors.email.message}
      </div>

      <label>Password</label>
      <div className ="password_dotted"> 
      <Text name="password" innerRef={register({required: "Password is required.", minLength: {value: 4, message: "Password too short, minimum 4 characters."}})} errors={errors.password} placeholder={"Enter password..."} />
      </div>
      <div className="alert">
      {errors.password && errors.password.message}
      </div>

      <label>Repeat password</label>
      <div className ="password_dotted"> 
      <Text name="passwordRepeat"  innerRef={register({required: true})} errors={errors.paswordRepeat} placeholder={"Repeat password..."} />
      </div>
      <div className="alert">
      {errors.passwordRepeat && "Please repeat your passsword."}
      </div>
      
      <button className="button_submit">Submit</button>

      <Link to='/login'>
        <button className="button_submit">Login</button>
      </Link>
    </form>
    </div>
  )
}



