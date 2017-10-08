import storageService from "./storageService";

const KEY = 'categories';

export default {
    getCategory(id) {
        const categories = this.getCategories();
        return categories.find(c => c.id == id);
    },
    getCategories() {
        return storageService.getFromLocalStorage(KEY);
    },
    saveCategory(categories) {
        storageService.saveToLocalStorage(KEY, categories);
    }
}
