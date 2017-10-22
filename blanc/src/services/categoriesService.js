import localStorageService from "./localStorageService";

const categories = [];

const KEY = 'categories';

export default {
    saveCategory(category) {
        this.categories = this.getCategories();

        category.id = this.categories.length + 1;

        this.categories.push(category);

        localStorageService.saveToLocalStorage(KEY, this.categories);
    },
    getCategory(id) {
        this.categories = this.getCategories();
        return this.categories.find(ctg => ctg.id == id);
    },
    getCategories() {
        return localStorageService.getFromLocalStorage(KEY);
    }
}
