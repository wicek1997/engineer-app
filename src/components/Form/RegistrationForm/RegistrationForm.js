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
  const onSubmit = data => {
    UserApi.register(data)
    .then(response => response.data)
    .then(data => console.log(data))
    .catch(error => console.log(error));
  }
  return(
    <div className="register">
    <form onSubmit={handleSubmit(onSubmit)}>
      <Text name="username" innerRef={register({required: true})} errors={errors.username} help="Username" placeholder={"Enter username..."} />
      <Text name="email" innerRef={register({required: true})} errors={errors.email} help="email" placeholder={"Enter email..."} />
      <Text name="password" innerRef={register({required: true})} errors={errors.password} help="password" placeholder={"Enter password..."} />
      <button>Submit</button>
    </form>
    </div>
  )
  
}



