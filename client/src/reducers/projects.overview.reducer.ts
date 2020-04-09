import { AddProjectInput, Project } from '../sdk/graphql-zeus';
import projectOverviewService from '../services/projects.overview.service';

export interface ProjectsOverviewState {
  asDeveloper: Project[],
  asHost: Project[],
  starred: Project[]
}

const initProjectsOverview = (userId: string) => {
  return async dispatch => {

    const theUser = await projectOverviewService.queryProjects(userId);
    const asDeveloper = theUser.developer.map(dev => dev.project);
    const asHost = theUser.host;
    const starred = theUser.stars;

    const data = {
      asDeveloper,
      asHost,
      starred,
    };
    dispatch({
      type: 'INIT_PROJECTS_DEV',
      data,
    });
  };
};

const addProjectAsHost = (addProjectInput: AddProjectInput) => {
  return async dispatch => {
    const projects = await projectOverviewService.addProject(addProjectInput);
    dispatch({
      type: 'ADD_PROJECT_AS_HOST',
      data: projects,
    });
  };
};

const toggleStar = (userId: string, setStars: [{ id: string }]) => {
  return async dispatch => {
    const stars = await projectOverviewService.starProject(userId, setStars);
    dispatch({
      type: 'TOGGLE_STARS',
      data: stars,
    });
  };
};

export { initProjectsOverview, addProjectAsHost, toggleStar };

const projectsOverviewInitialState: ProjectsOverviewState = { asDeveloper: [], asHost: [], starred: [] };

const projectsOverviewReducer = (
  state: ProjectsOverviewState = projectsOverviewInitialState,
  action,
): ProjectsOverviewState => {
  switch (action.type) {
    case 'INIT_PROJECTS_DEV':
      return action.data;
    case 'ADD_PROJECT_AS_HOST':
      return { ...state, asHost: [...action.data, ...state.asHost] };
    default:
      return state;
  }
};

export default projectsOverviewReducer;
