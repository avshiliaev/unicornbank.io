import { Injectable } from '@nestjs/common';
import { Chain } from '../../../sdk/graphql-zeus';

@Injectable()
export class HostService {

  // Example
  getMyProjects = async () => {
    const chain = Chain('http://localhost:8080/graphql');
    return await chain.query({
      queryUser: [
        {},
        {
          username: true,
          host: [{}, { title: true }],
          developer: [
            {},
            {
              project: [
                {},
                { title: true },
              ],
            },
          ],
        },
      ],
    });
  };

}
