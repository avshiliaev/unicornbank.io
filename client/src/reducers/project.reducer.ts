import { Project } from '../sdk/graphql-zeus';
import projectService from '../services/project.services';

const getProject = (projectId: string) => {
  return async dispatch => {
    const project = await projectService.queryProject(projectId);
    dispatch({
      type: 'GET_PROJECT',
      data: project,
    });
  };
};

export { getProject };

const projectReducer = (state: Project | Object, action): Project | Object => {
  switch (action.type) {
    case 'GET_PROJECT':
      return { ...state, ...action.data };
    default:
      return { ...state };
  }
};

export default projectReducer;
