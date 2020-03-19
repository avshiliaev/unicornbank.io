import { Injectable } from '@nestjs/common';
import { Chain } from '../../graphql-zeus';

@Injectable()
export class AppService {

  getProjects = async () => {
    const chain = Chain('http://localhost:8080/graphql');
    const listProjects = await chain.query({
      queryProject: [{}, {id: true}],
    });

    return JSON.stringify(listProjects);
  }

}
