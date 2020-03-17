import {AddProjectInput, User} from '../api/interfaces/types.d';
import {getAllRolesByUser, queryProjects} from './actions/queries';
import {addProject, addUser, deleteProject} from './actions/mutations';
import {v4 as uuidv4} from 'uuid';

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
    hostsIds: string[] = [];

    constructor(url: string) {
        this.url = url;
    }

    async addNewHost() {
        function getRandomInt(max: number) {
            return Math.floor(Math.random() * Math.floor(max)) + 1;
        }

        const numberHosts = getRandomInt(5);
        const newHosts = [...Array(numberHosts)].map(() => ({username: uuidv4(), password: 'pass', location: 'loc'}));
        const newHostsIds = await addUser(newHosts, this.url);
        this.hostsIds = this.hostsIds.concat(newHostsIds.map(user => user.id))
    }

    // Keep always min one host
    removeHost() {
        if (this.hostsIds.length > 1) {
            this.hostsIds = this.hostsIds.slice(0, -1)
        }
    }

    async updateProjects() {
        const payload = await queryProjects(this.url);
        this.myProjects = payload.map(proj => proj.id);
    }

    async createProject() {
        if (this.hostsIds.length > 1) {
            function getRandomInt(max: number) {
                return Math.floor(Math.random() * Math.floor(max)) + 1;
            }
            const activeHosts = this.hostsIds.slice(0, getRandomInt(this.hostsIds.length));

            const generateProject = (hostId: string): AddProjectInput => {
                return {title: 'title', description: 'descr', hosts: [{id: hostId}]}
            };
            const projectInput: AddProjectInput[] = activeHosts.map(hostId => generateProject(hostId));
            await addProject(projectInput, this.url)
        }

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
