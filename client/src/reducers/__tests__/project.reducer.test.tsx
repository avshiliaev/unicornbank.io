import projectReducer from '../project.reducer';

describe('projectReducer', () => {
  it('should return the initial state', () => {
    expect(projectReducer(undefined, {})).toEqual({});
  });

  it('should handle GET_PROJECT', () => {
    const projectOne = { id: '1', title: '1' };
    const projectTwo = { id: '2', title: '2' };

    expect(
      projectReducer(
        {},
        {
          type: 'GET_PROJECT',
          data: projectOne,
        }),
    ).toEqual(projectOne);

    expect(
      projectReducer(
        projectOne,
        {
          type: 'GET_PROJECT',
          data: projectTwo,
        },
      ),
    ).toEqual(projectTwo);
  });
});
