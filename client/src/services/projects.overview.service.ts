import { AddProjectInput, Chain } from '../sdk/graphql-zeus';

const url = 'http://localhost:8080/graphql';

const queryProjects = async (userId: string) => {

  const chain = Chain(url);
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
              entities: [{}, { id: true }],
              developers: [{}, { id: true }],
            },
          ],
          stars: [
            {},
            {
              id: true,
              title: true,
              description: true,
              entities: [{}, { id: true }],
              developers: [{}, { id: true }],
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
                  entities: [{}, { id: true }],
                  developers: [{}, { id: true }],
                },
              ],
            },
          ],
        },
      ],
    },
  );

  return payload.getUser;
};

const addProject = async (addProjectInput: AddProjectInput) => {

  const chain = Chain(url);
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
              entities: [{}, { id: true }],
              developers: [{}, { id: true }],
            },
          ],
        },
      ],
    },
  );

  return payload.addProject.project;
};

const starProject = async (userId: string, setStars: [{ id: string }]) => {

  const chain = Chain(url);
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

  return payload.updateUser.user[0].stars;
};

const projectOverviewService = {
  queryProjects,
  addProject,
  starProject
};
export default projectOverviewService;
