interface SelectedProjectState {
  id: string | undefined
}

const selectProject = (selectedProject: SelectedProjectState) => {
  return async dispatch => {
    dispatch({
      type: 'SELECT_PROJECT',
      data: selectedProject,
    });
  };
};

export { selectProject };

const projectInitialState: SelectedProjectState = { id: undefined };

const projectReducer = (state: SelectedProjectState = projectInitialState, action): SelectedProjectState => {
  switch (action.type) {
    case 'SELECT_PROJECT':
      return action.data;
    default:
      return state;
  }
};

export default projectReducer;
