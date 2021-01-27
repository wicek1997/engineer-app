import Axios from 'axios';

const jwt = localStorage.getItem('access_token');

const axios = Axios.create({
  baseURL: `${process.env.REACT_APP_API_IP}`,
  timeout: 5000,
  headers: {
  Authorization: `Bearer ${jwt}`,
  }
});

const getProjects = () => {
  return axios.get("/api/v1/project");
}

const getProject = id => {
  return axios.get(`/api/v1/project/${id}`);
}

const createProject = ({ title, description, slug }) => {
  return axios.post("/api/v1/project", {
    project_title: title,
    project_description: description,
    project_slug: slug
  });
}

export const ProjectApi = {
  getProjects,
  getProject,
  createProject,
};