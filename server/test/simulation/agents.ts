import {AddProjectInput} from '../../../server_/api/interfaces/types.d';
import {queryProjects} from './actions/queries';
import {addProject, addUser, deleteProject} from './actions/mutations';
import {v4 as uuidv4} from 'uuid';

const random = require('random');
const poisson = random.poisson();

export class Developer {

    url: string;
    devIds: string[] = [];
    maxDevsToCome = 100;

    constructor(url: string) {
        this.url = url;
    }

    // From 0 to N
    simulateGrowth(value: number) {
        const rand = poisson();
        const result = Math.floor(rand * value);
        return result > 0 ? result : 1
    }

    simulateChurn(value: number) {
        return Math.floor(value * random.uniform(0, 0.3))
    }

    speedUpLeadsGenereation() {
        const speedUp = this.simulateGrowth(this.maxDevsToCome);
        this.maxDevsToCome += speedUp;
    }


    async addNewDev() {
        const numberDev = this.simulateGrowth(this.maxDevsToCome);
        const newDevs = [...Array(numberDev)].map(() => ({username: uuidv4(), password: 'pass', location: 'loc'}));
        const newDevsIds = await addUser(newDevs, this.url);
        this.devIds = this.devIds.concat(newDevsIds.map(user => user.id))
    }

    removeDev() {
        if (this.devIds.length > 10) {
            const toDelete = this.devIds.slice(0, this.simulateChurn(this.devIds.length));
            this.devIds = this.devIds.filter(dev => !toDelete.includes(dev))
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

    // From 0 to N
    simulateGrowth(value: number) {
        const rand = poisson();
        const result = Math.floor(rand * value);
        return result > 0 ? result : 1
    }

    simulateChurn(value: number) {
        return Math.floor(value * random.uniform(0, 0.3))
    }

    speedUpLeadsGenereation() {
        const speedUp = this.simulateGrowth(this.maxHostsToCome);
        this.maxHostsToCome += speedUp;
    }

    async addNewHost() {
        const numberHosts = this.simulateGrowth(this.maxHostsToCome);
        const newHosts = [...Array(numberHosts)].map(() => ({username: uuidv4(), password: 'pass', location: 'loc'}));
        const newHostsIds = await addUser(newHosts, this.url);
        this.hostsIds = this.hostsIds.concat(newHostsIds.map(user => user.id))
    }

    // Keep always min one host
    removeHost() {
        if (this.hostsIds.length > 10) {
            const toDelete = this.hostsIds.slice(0, this.simulateChurn(this.hostsIds.length));
            this.hostsIds = this.hostsIds.filter(host => !toDelete.includes(host))
        }
    }

    async updateProjects() {
        const payload = await queryProjects(this.url);
        this.allProjects = payload.map(proj => proj.id);
    }

    async createProject() {
        if (this.hostsIds.length > 1) {
            const activeHosts = this.hostsIds.slice(0, this.simulateGrowth(this.hostsIds.length));
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
            const toDelete = this.allProjects.slice(0, this.simulateGrowth(this.allProjects.length));
            await deleteProject(toDelete, this.url);
            this.allProjects = this.allProjects.filter((proj) => !toDelete.indexOf(proj))
        }
    }

}
