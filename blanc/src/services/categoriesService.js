import axios from 'axios';

let categories = [];

const KEY = 'categories';

export default {
    getCategory(link) {
        return axios.get(link,{'timeout': 5000});
    },
    getCategories() {
      return axios.get('https://utn-newspaper-api.herokuapp.com/categories',{'timeout': 5000});
    }
}
