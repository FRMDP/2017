import axios from 'axios';

let reporters = [];

const KEY = 'reporters';

export default {
    saveReporter(reporter) {
        this.reporters = this.getReporters();

        reporter.id = this.reporters.length + 1;

        this.reporters.push(reporter);

        localStorageService.saveToLocalStorage(KEY, this.reporters);
    },
    getReporter(id) {
        this.reporters = this.getReporters();
        return this.reporters.find(rprt => rprt.id == id);
    },
    getReporters() {
        axios.get('https://utn-newspaper-api.herokuapp.com/reporters')
            .then(response => {
                this.reporters = response.data();
                return reporters;
            })
            .catch(error => {
                console.log("No Reporters have been found!");
            });
    }
}
