const categories = [
    {id: 1, name: "sports"},
    {id: 2, name: "local"},
    {id: 3, name: "world"},
    {id: 4, name: "economy"},
    {id: 5, name: "politics"},
    {id: 6, name: "entertainment"}
];


export default {
    getCategory(id) {
        return categories.find(c => c.id == id);
    },
    getAllCategories() {
        return categories;
    }

}