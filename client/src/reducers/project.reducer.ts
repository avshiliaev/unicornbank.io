import { Project } from '../sdk/graphql-zeus';

const projectsInitialState: Project[] = [];

const projectReducer = (state: Project[] = projectsInitialState, action): Project[] => {
  switch (action.type) {
    case 'INIT_PROJECTS_DEV':
      return action.data;
    default:
      return state;
  }
};

export default projectReducer;
