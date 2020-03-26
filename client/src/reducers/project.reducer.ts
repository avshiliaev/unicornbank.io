import { Project } from '../sdk/graphql-zeus';

export interface ProjectState {
  asDeveloper: Project[],
  asHost: Project[]
}

const projectsInitialState: ProjectState = { asDeveloper: [], asHost: [] };

const projectReducer = (state: ProjectState = projectsInitialState, action): ProjectState => {
  switch (action.type) {
    case 'INIT_PROJECTS_DEV':
      return action.data;
    default:
      return state;
  }
};

export default projectReducer;
