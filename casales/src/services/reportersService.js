import storageService from "./storageService";

const KEY = 'reporters';

export default {
    getReporter(id) {
        const reporters = this.getReporters();
        return reporters.find(r => r.id == id);
    },
    getReporters() {
        return storageService.getFromLocalStorage(KEY);
    },
    saveReporters(reporters) {
        storageService.saveToLocalStorage(KEY, reporters);
    }
}
