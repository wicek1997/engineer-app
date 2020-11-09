import React from 'react';
import {Text} from '../Field';
import { useForm } from "react-hook-form";
import { UserApi } from '../../../services';
import { useDispatch } from 'react-redux';
import { alertActions } from '../../../redux';

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <Text name="name" innerRef={register({required: true, min: 10})} errors={errors.username} help="Name" placeholder={"Enter name..."} />
      <Text name="surname" innerRef={register({required: true, min: 10})} errors={errors.username} help="Surname" placeholder={"Enter surname..."} />
      <Text name="login" innerRef={register({required: true, min: 10})} errors={errors.username} help="Password" placeholder={"Enter username..."} />
      <Text name="pasword" innerRef={register({required: true, min: 10})} errors={errors.username} help="Password" placeholder={"Enter password..."} />
      <Text name="repeat_password" innerRef={register({required: true, min: 10})} errors={errors.username} help="Password" placeholder={"Repeat passoword..."} />
      <Text name="email" innerRef={register({required: true, min: 10})} errors={errors.username} help="Password" placeholder={"Enter email..."} />
      <button>Submit</button>
    </form>
  )
}