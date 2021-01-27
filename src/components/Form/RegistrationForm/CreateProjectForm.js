import React from 'react';
import {Text} from '../Field';
import { useForm } from "react-hook-form";
import { ProjectApi } from '../../../services';
import { createDispatchHook, useDispatch } from 'react-redux';
import { StaticRouter, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./Form.scss";
import { alertActions, authReducer, authActions } from '../../../redux';

// zmienic css na inne i przerobic form


export const CreateProjectForm = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();
  const jwt = localStorage.getItem('access_token');
  console.log(jwt);

  const onSubmit = data => {
    console.log(data, " Tworzenie");

    ProjectApi.createProject(data)
    .then((response) => response.data)
    .then(data => console.log(data, "STWORZONO PROJEKT"))

     // localStorage.setItem("access_token", data.payload.access_token);
      
     // dispatch(authActions.loginSuccess({jwt: data.payload.access_token}));
    //  history.push('/account');
    
    .catch((error) => {
      //dispatch(alertActions.sendErrorAlert("Blad logowania."))
      console.log(error, " cos jest nie tak.")
    });
  }

return(
    <div className="register">
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h1>Create Project</h1>

      <label>Project Title</label>
      <Text name="project_title" innerRef={register({required: "Write title."})} errors={errors.username} placeholder={"Enter title..."} />
      <div className="alert">
      {errors.username && <p>{errors.username.message}</p>}
      </div>

      <label>Project descripiton</label>
      <div className ="project_description">
      <Text name="project_description" errors={errors.username} innerRef={register({required: "Write description."})} placeholder={"Enter describe..."} />
      </div>
      <div className="alert">
      {errors.password && <p>{errors.password.message}</p>}
      </div>

      <label>Project Slug</label>
      <Text name="project_slug" innerRef={register({required: "Write slug."})} errors={errors.username} placeholder={"Enter title..."} />
      <div className="alert">
      {errors.username && <p>{errors.username.message}</p>}
      </div>
      
      <button className="button_submit">Create</button>

      <Link to='/account'>
        <button className="button_submit">Back</button>
      </Link>
    </form>
    </div>
  )
}