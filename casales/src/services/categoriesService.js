import storageService from "./storageService";

const categories = [];

const KEY = 'categories';

export default {
    getCategory(id) {
        this.categories = this.getCategories();
        return this.categories.find(c => c.id == id);
    },
    getCategories() {
        return storageService.getFromLocalStorage(KEY);
    },
    saveCategory(category) {
        this.categories = this.getCategories();

        category.id = this.categories.length + 1;

        this.categories.push(category);

        storageService.saveToLocalStorage(KEY, this.categories);
    }
}
