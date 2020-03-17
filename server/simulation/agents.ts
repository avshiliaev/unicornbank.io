import {AddProjectInput} from '../api/interfaces/types.d';
import {queryProjects} from './actions/queries';
import {addProject, addUser, deleteProject} from './actions/mutations';
import {v4 as uuidv4} from 'uuid';

export class Developer {

    url: string;
    devIds: string[] = [];
    maxDevsToCome = 100;

    constructor(url: string) {
        this.url = url;
    }

    getRandomInt(max: number) {
        return Math.floor(Math.random() * Math.floor(max)) + 1;
    }

    async addNewDev() {
        const numberDev = this.getRandomInt(this.maxDevsToCome);
        const newDevs = [...Array(numberDev)].map(() => ({username: uuidv4(), password: 'pass', location: 'loc'}));
        const newDevsIds = await addUser(newDevs, this.url);
        this.devIds = this.devIds.concat(newDevsIds.map(user => user.id))
    }

    removeDev() {
        if (this.devIds.length > 3) {
            this.devIds = this.devIds.slice(0, -2)
        }
    }

}

export class Host {

    url: string;
    allProjects: string[] = [];
    hostsIds: string[] = [];
    maxHostsToCome = 10;

    constructor(url: string) {
        this.url = url;
    }

    getRandomInt(max: number) {
        return Math.floor(Math.random() * Math.floor(max)) + 1;
    }

    async addNewHost() {
        const numberHosts = this.getRandomInt(this.maxHostsToCome);
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
        this.allProjects = payload.map(proj => proj.id);
    }

    async createProject() {
        if (this.hostsIds.length > 1) {
            const activeHosts = this.hostsIds.slice(0, this.getRandomInt(this.hostsIds.length));
            const generateProject = (hostId: string): AddProjectInput => {
                return {title: 'title', description: 'descr', hosts: [{id: hostId}]}
            };
            const projectInput: AddProjectInput[] = activeHosts.map(hostId => generateProject(hostId));
            await addProject(projectInput, this.url)
        }

    }

    async deleteRandom() {
        // Delete random number of all projects
        if (this.allProjects.length !== 0) {
            const toDelete = this.allProjects.slice(0, this.getRandomInt(this.allProjects.length));
            await deleteProject(toDelete, this.url)
        }
    }

}
