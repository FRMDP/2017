import axios from 'axios';

let reporters = [];

const KEY = 'reporters';

export default {
    getReporter(link) {
        return axios.get(link,{'timeout': 5000});
    },
    getReporters() {
        return axios.get('https://utn-newspaper-api.herokuapp.com/reporters',{'timeout': 5000});
    }
}
