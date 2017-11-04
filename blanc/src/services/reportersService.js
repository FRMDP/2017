import axios from 'axios';

let reporters = [];

const KEY = 'reporters';

export default {
    getReporter(link) {
        return axios.get(link);
    },
    getReporters() {
        return axios.get('https://utn-newspaper-api.herokuapp.com/reporters');
    }
}
