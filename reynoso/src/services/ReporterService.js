const reporters= [
    {id: 1, name: "John Doe"},
    {id: 2, name: "Jane Doe"},
    {id: 3, name: "Chuck Norris"},
    {id: 4, name: "Barack Obama"}
    ];
export default {
    setReporters(){
        localStorage.setItem('reporters', JSON.stringify(reporters));
    },
    getReporters(){
        return JSON.parse(localStorage.getItem('reporters'));
    },
    getReporter(id){
        return getReporters().find(reporter => reporter.id == id);
    },
    mounted(){
        this.setReporters();
    }
}