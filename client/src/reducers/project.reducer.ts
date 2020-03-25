import { Project } from '../sdk/graphql-zeus';

const projectReducer = (state: Project[], action): Project[] => {
  switch (action.type) {
    case 'INIT_PROJECTS_DEV':
      return action.data;
    default:
      return [];
  }
};

export default projectReducer;
