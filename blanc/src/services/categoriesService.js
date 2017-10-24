import axios from 'axios';

let categories = [];

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
        axios.get('https://utn-newspaper-api.herokuapp.com/categories')
            .then(response => {
                this.mapCategories(response.data);
            })
            .catch((error) => {
                console.log("No Categories have been found!");
            });
        return categories;
    },
    mapCategories(response) {
        this.categories = response.data;
    }
}
