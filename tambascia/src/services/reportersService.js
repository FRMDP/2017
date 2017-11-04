const reporters = [];

export default {
    getReporters(id) {
        return reporters.find(r => r[0].uid == id);
    },
    getAllReporters() {
        axios.get('http://localhost:8090/reporters')
            .then(response => reporters.push(response.data._embedded.reporters))
            .catch(error => console.log('there was the following error loading news: ' + error));
        return reporters;
    },
    updateReporters() {
        axios.get('http://localhost:8090/reporters')
            .then(response => reporters.push(response.data._embedded.reporters))
            .catch(error => console.log('there was the following error loading news: ' + error));
    }
}