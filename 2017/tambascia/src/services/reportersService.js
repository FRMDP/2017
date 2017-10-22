const reporters = [
    {id: 1, name: "John Doe"},
    {id: 2, name: "Jane Doe"},
    {id: 3, name: "Chuck Norris"},
    {id: 4, name: "Barack Obama"}
];

export default {
    getReporters(id) {
        return reporters.find(r => r.id == id);
    },
    getAllReporters() {
        return reporters;
    }
}