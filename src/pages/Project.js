import React, { useEffect } from 'react';
import { ProjectApi } from '../services/ProjectApi';

// const Project = ({project, user}) => {
//   const isProjectOwner = (user, project) => {
//     return user.username === project.project_owner.username;
//   }

//   return (
//   <div>
//     <h2>{project.title}</h2>
//     {isProjectOwner(user, project) && <Link to={`/account/project/${project.id}/edit`}>Edytuj</Link> }
//     {isProjectOwner(user, project) && <button onClick={ProjectApi.deleteProject(project.id)}>Usuń projekt</button> }
//     <div>
//       <h3>Członkowie</h3>
//       { project.projectMembers.map(member => {
//         <p>{member.username}</p>
//         {isProjectOwner(user, project) && <button onClick={ProjectApi.removeProjectMember(member.id)}>Usuń członka</button>}
//       })}
      
//     </div>
//   </div>
// )}


export const Project = (props) => {
  console.log(props);
  const projectId = props.match.params.id;

  useEffect(() => {
    ProjectApi.getProject(projectId)
    .then()
    .then()
    .catch()
  });

  return (
    <h1>Project page</h1>
    
  );
}