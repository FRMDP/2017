import localStorageService from "./localStorageService";

const reporters = [];

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
        return localStorageService.getFromLocalStorage(KEY);
    }
}
