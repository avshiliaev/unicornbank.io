import { AddProjectInput, Chain, Project } from '../sdk/graphql-zeus';

const chain = Chain('http://localhost:8080/graphql');

export interface ProjectsOverviewState {
  asDeveloper: Project[],
  asHost: Project[],
  starred: Project[]
}

const initProjectsOverview = (userId: string) => {
  return async dispatch => {
    const payload = await chain.query(
      {
        getUser: [
          { id: userId },
          {
            host: [
              {},
              {
                id: true,
                title: true,
                description: true,
                tasks: [{}, { id: true }],
                developers: [{}, { id: true }],
                tags: [{}, { id: true }],
              },
            ],
            stars: [
              {},
              {
                id: true,
                title: true,
                description: true,
                tasks: [{}, { id: true }],
                developers: [{}, { id: true }],
                tags: [{}, { id: true }],
              }
            ],
            developer: [
              {},
              {
                project: [
                  {},
                  {
                    id: true,
                    title: true,
                    description: true,
                    tasks: [{}, { id: true }],
                    developers: [{}, { id: true }],
                    tags: [{}, { id: true }],
                  },
                ],
              },
            ],
          },
        ],
      },
    );
    const theUser = payload.getUser;
    const asDeveloper = theUser.developer.map(dev => dev.project);
    const asHost = theUser.host;
    const starred = theUser.stars;

    const data = {
      asDeveloper,
      asHost,
      starred
    };
    dispatch({
      type: 'INIT_PROJECTS_DEV',
      data,
    });
  };
};

const addProjectAsHost = (addProjectInput: AddProjectInput) => {
  return async dispatch => {
    const payload = await chain.mutation(
      {
        addProject: [
          { input: [addProjectInput] },
          {
            project: [
              {},
              {
                id: true,
                title: true,
                description: true,
                tasks: [{}, { id: true }],
                developers: [{}, { id: true }],
                tags: [{}, { id: true }],
              },
            ],
          },
        ],
      },
    );
    dispatch({
      type: 'ADD_PROJECT_AS_HOST',
      data: payload.addProject.project,
    });
  };
};

const toggleStar = (userId: string, setStars: [{ id: string }]) => {
  return async dispatch => {
    const payload = await chain.mutation(
      {
        updateUser: [
          { input: { filter: { id: [userId] }, set: { stars: setStars } } },
          {
            user: [
              {},
              {
                id: true,
                stars: [{}, { id: true }],
              },
            ],
          },
        ],
      },
    );
    dispatch({
      type: 'TOGGLE_STARS',
      data: payload.updateUser.user[0].stars,
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
