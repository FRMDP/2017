import axios from 'axios';

let categories = [];

const KEY = 'categories';

export default {
    getCategory(link) {
        return axios.get(link);
    },
    getCategories() {
      return axios.get('https://utn-newspaper-api.herokuapp.com/categories');
    }
}
