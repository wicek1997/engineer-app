import React, { useEffect, useState } from "react";
import {Text} from '../Field';
import { useForm } from "react-hook-form";
import { UserApi } from '../../../services';
import { useDispatch } from 'react-redux';
import { alertActions } from '../../../redux';
import "./Form.scss";


export const RegistrationForm = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const dispatch = useDispatch();
  const [lastTestedUsername, setLastTestedUsername] = useState();
  const watchPassword = watch(['password','passwordRepeat']); //      {watchPassword && <input type="number" name="age" ref={register({ min: 50 })} />}

  //let responseStatus = response.status;
  
  const onSubmit = data => {
    UserApi.validateUser(data).then(response => {

      //responseStatus = response.status;
      //console.log(response.status);

    });
    //czy hasla sa takie same
    if(data.password == data.passwordRepeat){
      console.log(data);
      UserApi.register(data)
        .then(response => response.data)
        .then(data => console.log(data))
        .catch(error => console.log(error));  
          //obsluzyc 404
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
      <Text name="username" innerRef={register({required: true})} errors={errors.username} placeholder={"Enter username..."} />
      <label>Email</label>
      <Text name="email" innerRef={register({required: true})} errors={errors.email} placeholder={"Enter email..."} />
      <label>Password</label>
      <Text name="password" innerRef={register({required: true})} errors={errors.password} placeholder={"Enter password..."} />
      <label>Repeat password</label>
      <Text name="passwordRepeat" innerRef={register({required: true})} errors={errors.paswordRepeat} placeholder={"Repeat password..."} />
      <button className="button_submit">Submit</button>
    </form>
    </div>
  )
}



