import projectOverviewService from '../../services/projects.overview.service';
import { addProjectAsHost, initProjectsOverview } from '../projects.overview.reducer';
import { AddProjectInput } from '../../sdk/graphql-zeus';

describe('async actions', () => {

  it('INIT_PROJECTS_DEV', async () => {
    const mockPayload = {
      host: [{ id: 'host' }],
      stars: [{ id: 'stars' }],
      developer: [{ project: { id: 'developer' } }],
    };
    const desiredData = { asDeveloper: [{ id: 'developer' }], asHost: [{ id: 'host' }], starred: [{ id: 'stars' }] };

    projectOverviewService.queryProjects = jest.fn().mockReturnValue(mockPayload);

    const dispatch = jest.fn();
    await initProjectsOverview('0x1')(dispatch);
    expect(dispatch).toHaveBeenLastCalledWith({
      type: 'INIT_PROJECTS_DEV',
      data: desiredData,
    });
  });

  it('ADD_PROJECT_AS_HOST', async () => {
    const addProjectInput: AddProjectInput = { title: 'title', description: 'description' };

    projectOverviewService.addProject = jest.fn().mockReturnValue([addProjectInput]);

    const dispatch = jest.fn();
    await addProjectAsHost(addProjectInput)(dispatch);
    expect(dispatch).toHaveBeenLastCalledWith({
      type: 'ADD_PROJECT_AS_HOST',
      data: [addProjectInput],
    });
  });
});
