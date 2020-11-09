import React from 'react';
import {Text} from '../Field';
import { useForm } from "react-hook-form";
import { UserApi } from '../../../services';
import { useDispatch } from 'react-redux';
import { alertActions } from '../../../redux';
import "./Form.scss";


export const RegistrationForm = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const dispatch = useDispatch();

  const onSubmit = () => {
    UserApi.register("test", "test@example.com", "12345")
    .then(response => console.log(response))
    .catch(error => {
      dispatch(alertActions.sendErrorAlert(error.message));
    });
  }
  return(
    <div className="register">
    <form classname="form" onSubmit={handleSubmit(onSubmit)}>
      <h1>Registration</h1>
      <Text name="username" innerRef={register({required: true, min: 10})} errors={errors.username} help="Username" placeholder={"Enter username..."} />
      <Text name="password" innerRef={register({required: true, min: 10})} errors={errors.username} help="Password" placeholder={"Enter password..."} />
      <Text name="repeat-password" innerRef={register({required: true, min: 10})} errors={errors.username} help="Repeat-password" placeholder={"Enter password..."} />
      <Text name="name" innerRef={register({required: true, min: 10})} errors={errors.username} help="Name" placeholder={"Enter name..."} />
      <Text name="surname" innerRef={register({required: true, min: 10})} errors={errors.username} help="Surname" placeholder={"Enter surname..."} />
      <Text name="email" innerRef={register({required: true, min: 10})} errors={errors.username} help="Email" placeholder={"Enter email..."} />
      <button className="form-button">Submit</button>
    </form>
    </div>
  )
}