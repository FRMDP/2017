export default {
    getReporter(id) {
        return JSON.parse(localStorage.getItem('reporters')).find(reporter => reporter.id == id);
    }
}