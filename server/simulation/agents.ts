import {AddProjectInput} from '../api/interfaces/types.d';
import {queryProjects} from './actions/queries';
import {addProject, addUser, deleteProject} from './actions/mutations';
import {v4 as uuidv4} from 'uuid';

export class Developer {

    url: string;
    devIds: string[] = [];
    maxDevsToCome = 10;

    constructor(url: string) {
        this.url = url;
    }

    speedUpLeadsGenereation() {
        const speedUp = this.getRandomInt(5);
        this.maxDevsToCome += speedUp;
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
            const toDelete = this.devIds.slice(0, this.getRandomInt(this.devIds.length));
            this.devIds = this.devIds.filter(dev => !toDelete.includes(dev))
        }
    }

}

export class Host {

    url: string;
    allProjects: string[] = [];
    hostsIds: string[] = [];
    maxHostsToCome = 5;

    constructor(url: string) {
        this.url = url;
    }

    getRandomInt(max: number) {
        return Math.floor(Math.random() * Math.floor(max)) + 1;
    }

    speedUpLeadsGenereation() {
        const speedUp = this.getRandomInt(3);
        this.maxHostsToCome += speedUp;
    }

    async addNewHost() {
        const numberHosts = this.getRandomInt(this.maxHostsToCome);
        const newHosts = [...Array(numberHosts)].map(() => ({username: uuidv4(), password: 'pass', location: 'loc'}));
        const newHostsIds = await addUser(newHosts, this.url);
        this.hostsIds = this.hostsIds.concat(newHostsIds.map(user => user.id))
    }

    // Keep always min one host
    removeHost() {
        if (this.hostsIds.length > 3) {
            const toDelete = this.hostsIds.slice(0, this.getRandomInt(this.hostsIds.length));
            this.hostsIds = this.hostsIds.filter(host => !toDelete.includes(host))
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
        if (this.allProjects.length < 0) {
            const toDelete = this.allProjects.slice(0, this.getRandomInt(this.allProjects.length));
            await deleteProject(toDelete, this.url)
            this.allProjects = this.allProjects.filter((proj) => !toDelete.indexOf(proj))
        }
    }

}
