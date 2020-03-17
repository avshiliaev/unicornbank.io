import {AddProjectInput, User} from '../../client/src/api/interfaces/types.d';
import {getAllRolesByUser, queryProjects} from './actions/queries';
import {addProject, deleteProject} from './actions/mutations';
import { v4 as uuidv4 } from 'uuid';

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
    hostsNames: string[];

    constructor(url: string) {
        this.url = url;
        this.hostsNames = [uuidv4()];
    }

    addNewHost() {
        function getRandomInt(max: number) {
            return Math.floor(Math.random() * Math.floor(max)) + 1;
        }
        const numberHosts = getRandomInt(5);
        const newHosts = [...Array(numberHosts)].map(() => uuidv4());
        this.hostsNames = this.hostsNames.concat(newHosts)
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
        const activeHosts = this.hostsNames.slice(0, getRandomInt(this.hostsNames.length));

        const generateProject = (): AddProjectInput => {
          return {title: 'title', description: 'descr'}
        };
        const projectInput: AddProjectInput[] = activeHosts.map(name => generateProject());
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
