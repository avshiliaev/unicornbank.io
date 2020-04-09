import projectsOverviewReducer, { ProjectsOverviewState } from '../projects.overview.reducer';
import { Project } from '../../sdk/graphql-zeus';

const testInitState: ProjectsOverviewState = { asDeveloper: [], asHost: [], starred: [] };

describe('projectsOverviewReducer', () => {
  it('should return the initial state', () => {
    expect(projectsOverviewReducer(undefined, {})).toEqual(testInitState);
  });

  it('should handle INIT_PROJECTS_DEV', () => {

    const stateOne: ProjectsOverviewState = {
      asDeveloper: [{ id: '1', title: 'title', description: 'description' }],
      asHost: [], starred: [{ id: '0', title: 'title', description: 'description' }],
    };
    const stateTwo: ProjectsOverviewState = {
      asDeveloper: [{ id: '2', title: 'title', description: 'description' }],
      asHost: [{ id: '3', title: 'title', description: 'description' }],
      starred: [],
    };

    expect(
      projectsOverviewReducer(
        testInitState,
        {
          type: 'INIT_PROJECTS_DEV',
          data: stateOne,
        }),
    ).toEqual(stateOne);

    expect(
      projectsOverviewReducer(
        stateOne,
        {
          type: 'INIT_PROJECTS_DEV',
          data: stateTwo,
        },
      ),
    ).toEqual(stateTwo);
  });

  it('should handle ADD_PROJECT_AS_HOST', () => {

    const stateOne: ProjectsOverviewState = {
      asDeveloper: [{ id: '0', title: 'title', description: 'description' }],
      asHost: [],
      starred: [],
    };
    const newProjects: Project[] = [{ id: '1', title: 'title', description: 'description' }];

    const stateTwo: ProjectsOverviewState = {
      asDeveloper: [{ id: '0', title: 'title', description: 'description' }],
      asHost: [...newProjects],
      starred: [],
    };

    expect(
      projectsOverviewReducer(
        testInitState,
        {
          type: 'INIT_PROJECTS_DEV',
          data: stateOne,
        }),
    ).toEqual(stateOne);

    expect(
      projectsOverviewReducer(
        stateOne,
        {
          type: 'ADD_PROJECT_AS_HOST',
          data: newProjects,
        }),
    ).toEqual(stateTwo);

  });
});
