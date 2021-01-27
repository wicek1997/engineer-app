import React, { useEffect, useState } from 'react';
import { ProjectApi } from '../services/ProjectApi';
import {Link} from "react-router-dom";
import { projectAction } from '../redux/actions/project.actions';
import { createDispatchHook, useDispatch } from 'react-redux';

const STATUS = {
  REQUESTED: 'requested',
  LOADED: 'loaded',
  FAILED: 'failed'
};

export const ProjectList = () => {
  const [projects, setProjects] = useState({
    status: STATUS.REQUESTED,
    page: 1,
    count: 0,
    items: []
  });
  const dispatch = useDispatch();

  useEffect(() => {
    ProjectApi.getProjects()
    .then(response => response.data)
    .then(json => {
      console.log(json)
      dispatch(projectAction.getProjectList(json.payload))
      setProjects({
        status: STATUS.LOADED,
        page: json.payload.page,
        count: json.payload.count,
        items: json.payload.items,
      });
    })
    .catch(error => {
      console.log(error);
    })
  }, [])

  return (
    <>
         <Link to='/createproject'>
        <button className="button_createProject">Create Project</button>
        </Link>
      { projects.status === STATUS.LOADED && 
        projects.items.map(project => {
          return <div>{project.title}    <Link to={`/account/project/${project.id}`}>pokaż</Link></div>
        })
      }
    </>
  );
}