import { Injectable } from '@nestjs/common';
import { Chain } from '../../sdk/graphql-zeus';

@Injectable()
export class AppService {

  // Get summary stats after the simulation

  getProjects = async () => {
    const chain = Chain('http://localhost:8080/graphql');
    const listProjects = await chain.query({
      queryProject: [{}, {id: true}],
    });

    return JSON.stringify(listProjects);
  }

}
