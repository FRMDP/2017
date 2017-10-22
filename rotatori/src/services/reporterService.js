/* reporters = [
    {id: 1, name: "John Doe"},
    {id: 2, name: "Jane Doe"},
    {id: 3, name: "Chuck Norris"},
    {id: 4, name: "Barack Obama"}
];
Me sirve de referencia para saber los reporteros*/

export default {
    getReporterById(id){
        const reporters = this.getAllReporters();
        return reporters.find( r => r.id == id);

    },
    getAllReporters(){
        const reporters = localStorage.getItem('reporters');
        return JSON.parse(reporters);
    }
}