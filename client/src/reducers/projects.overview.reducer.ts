import { Chain, Project } from '../sdk/graphql-zeus';

const chain = Chain('http://localhost:8080/graphql');

export interface ProjectsOverviewState {
  asDeveloper: Project[],
  asHost: Project[]
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

    const data = {
      asDeveloper,
      asHost,
    };
    dispatch({
      type: 'INIT_PROJECTS_DEV',
      data,
    });
  };
};

export { initProjectsOverview };

const projectsOverviewInitialState: ProjectsOverviewState = { asDeveloper: [], asHost: [] };

const projectsOverviewReducer = (
  state: ProjectsOverviewState = projectsOverviewInitialState,
  action,
): ProjectsOverviewState => {
  switch (action.type) {
    case 'INIT_PROJECTS_DEV':
      return action.data;
    default:
      return state;
  }
};

export default projectsOverviewReducer;
