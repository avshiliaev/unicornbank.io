import { AddProjectInput, Chain, Project } from '../sdk/graphql-zeus';

const chain = Chain('http://localhost:8080/graphql');

const projectFragment = {
  id: true,
  description: true,
  tasks: [
    {},
    {
      id: true,
      title: true,
      content: true,
    },
  ],
};

const getProject = (projectId: string) => {
  return async dispatch => {
    const payload = await chain.query(
      {
        getProject: [
          { id: projectId },
          {
            id: true,
            description: true,
            tasks: [
              {},
              {
                id: true,
                title: true,
                content: true,
              },
            ],
          },
        ],
      },
    );
    dispatch({
      type: 'GET_PROJECT',
      data: payload.getProject,
    });
  };
};

const addProject = (addProjectInput: AddProjectInput) => {
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
                description: true,
                tasks: [
                  {},
                  {
                    id: true,
                    title: true,
                    content: true,
                  },
                ],
              },
            ],
          },
        ],
      },
    );
    dispatch({
      type: 'ADD_PROJECT',
      data: payload.addProject.project[0],
    });
  };
};

export { getProject, addProject };

const projectReducer = (state: Project | Object, action): Project | Object => {
  switch (action.type) {
    case 'GET_PROJECT':
      return { ...state, ...action.data };
    case 'ADD_PROJECT':
      return  { ...state, ...action.data };
    default:
      return { ...state };
  }
};

export default projectReducer;
