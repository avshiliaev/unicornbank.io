import { getProject } from '../project.reducer';
import projectService from '../../services/project.detail.service';
import { Project } from '../../sdk/graphql-zeus';

describe('async actions', () => {

  it('GET_PROJECT', async () => {
    const project: Project = {id: '0x1', title: 't', description: 'd'};

    projectService.queryProject = jest.fn().mockReturnValue(project);

    const dispatch = jest.fn();
    await getProject('0x9')(dispatch);
    expect(dispatch).toHaveBeenLastCalledWith({
      type: 'GET_PROJECT',
      data: project,
    });
  });
});
