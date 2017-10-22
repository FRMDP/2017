export default {
    getCategory(id) {
        return JSON.parse(localStorage.getItem('categories')).find(category => category.id == id);
    },
}