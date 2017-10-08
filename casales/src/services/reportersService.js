import storageService from "./storageService";

const KEY = 'reporters';

export default {
    getReporter(id) {
        const categories = this.getReporters();
        return categories.find(r => r.id == id);
    },
    getReporters() {
        return storageService.getFromLocalStorage(KEY);
    },
    saveReporters(categories) {
        storageService.saveToLocalStorage(KEY, categories);
    }
}
