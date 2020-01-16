import {Injectable} from '@nestjs/common';
import {request} from 'graphql-request';

interface Movie {
    releaseDate: string;
    actors: any[];
}

interface Query {
    Movie: Movie;
}

/**
 * https://github.com/prisma-labs/graphql-request
 */
@Injectable()
export class AppService {

    async getHello() {
        const endpoint = 'https://api.graph.cool/simple/v1/cixos23120m0n0173veiiwrjr';

        const query = /* GraphQL */ `
            query getMovie($title: String!) {
              Movie(title: $title) {
                releaseDate
                actors {
                  name
                }
              }
            }
          `;

        const variables = {
            title: 'Inception',
        };

        const payload: Query = await request(endpoint, query, variables);
        return `Number of actors: ${JSON.stringify(payload.Movie.actors.length)}`;
    }
}
