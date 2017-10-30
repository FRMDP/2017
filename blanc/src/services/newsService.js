import axios from 'axios';
import categoriesService from "./categoriesService";
import reportersService from "./reportersService";
import moment from "moment";

let news = [];

const KEY = 'news';

export default {
    saveNews(article) {
      const url = 'https://utn-newspaper-api.herokuapp.com/news';
        return axios({
            url: url,
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            data: article,
        });
    },
    getArticle(link) {
        return axios.get(link);
    },
    getNews() {
        return axios.get('https://utn-newspaper-api.herokuapp.com/news');
    }
}
