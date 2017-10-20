import storageService from "./storageService";

const reporters = [];

const KEY = 'reporters';

export default {
    getReporter(id) {
        this.reporters = this.getReporters();
        return this.reporters.find(r => r.id == id);
    },
    getReporters() {
        return storageService.getFromLocalStorage(KEY);
    },
    saveReporter(reporter) {
        this.reporters = this.getReporters();

        reporter.id = this.reporters.length + 1;

        this.reporters.push(reporter);

        storageService.saveToLocalStorage(KEY, this.reporters);
    }
}
