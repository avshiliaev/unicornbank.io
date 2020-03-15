import {User} from '../../client/src/api/interfaces/types.d';
import {getAllRolesByUser} from './actions';

export class Developer {

    userName: string;
    url: string;
    myRoles: User[] = [];

    constructor(username: string, url: string) {
        this.userName = username;
        this.url = url;
    }

    async getRoles() {
        this.myRoles = await getAllRolesByUser(this.userName, this.url);
    }

    showRoles() {
        return this.myRoles
    }
}

export class Employer {

    constructor() {
    }

}
