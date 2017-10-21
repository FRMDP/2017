export default {
    
	addCategories() {
        localStorage.setItem('categories', JSON.stringify(categories));
    },
    getCategory(id) {
        return JSON.parse(localStorage.getItem('categories')).find(category => category.id == id);
    },
}