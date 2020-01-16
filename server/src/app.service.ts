import {Injectable} from '@nestjs/common';
import {Query, User} from '../../interfaces/types';

@Injectable()
export class AppService {

    getHello(): string {
        /**
         * RESPONSE FORMAT FOR A QUERY!
         */
        const user: User = {
            username: 'username',
            password: 'password',
            location: 'loc',
        };
        const query: Query = {
            getUser: user,
        };
        console.log(query);
        return JSON.stringify(query);
    }
}
