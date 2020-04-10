import { Chain } from '../sdk/graphql-zeus';

const url = 'http://localhost:8080/graphql';

const queryProject = async (projectId: string) => {

  const chain = Chain(url);
  const payload = await chain.query(
    {
      getProject: [
        { id: projectId },
        {
          id: true,
          title: true,
          description: true,
          tasks: [
            {},
            {
              id: true,
              title: true,
              content: true,
              hours: true,
              priority: true,
              complete: true,
              deadline: true,
            },
          ],
        },
      ],
    },
  );

  return payload.getProject;
};

const projectService = {
  queryProject,
};
export default projectService;
