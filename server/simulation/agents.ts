import {AddProjectInput, User} from '../../client/src/api/interfaces/types.d';
import {getAllRolesByUser, queryProjects} from './actions/queries';
import {addProject, deleteProject} from './actions/mutations';

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

export class Host {

    url: string;
    myProjects: string[] = [];
    hostsNames = [0];

    constructor(url: string) {
        this.url = url;
    }

    addNewHost() {
        this.hostsNames = this.hostsNames.concat(this.hostsNames.length)
    }

    // Keep always min one host
    removeHost() {
        if (this.hostsNames.length > 1) {
            this.hostsNames = this.hostsNames.slice(0, -1)
        }
    }

    async updateProjects() {
        const payload = await queryProjects(this.url);
        this.myProjects = payload.map(proj => proj.id);
    }

    async createProject() {
        function getRandomInt(max: number) {
            return Math.floor(Math.random() * Math.floor(max)) + 1;
        }
        const activeHosts = this.hostsNames.slice(0, getRandomInt(this.myProjects.length));

        const projectInput: AddProjectInput[] = activeHosts.map(name => ({title: 'title', description: 'descr'}));
        await addProject(projectInput, this.url)
    }

    async deleteRandom() {
        // Delete random number of all projects
        if (this.myProjects.length !== 0) {
            function getRandomInt(max: number) {
                return Math.floor(Math.random() * Math.floor(max)) + 1;
            }

            const toDelete = this.myProjects.slice(0, getRandomInt(this.myProjects.length));
            await deleteProject(toDelete, this.url)
        }
    }

}
