import { getProject } from '../project.reducer';
import projectService from '../../services/project.services';

describe('async actions', () => {

  it('GET_PROJECT', async () => {
    const id = '0x1';

    projectService.queryProject = jest.fn().mockReturnValue({ id });

    const dispatch = jest.fn();
    await getProject('0x9')(dispatch);
    expect(dispatch).toHaveBeenLastCalledWith({
      type: 'GET_PROJECT',
      data: { id },
    });
  });
});
