import localStorageService from "./localStorageService";
import categoriesService from "./categoriesService";
import reportersService from "./reportersService";
import moment from "moment";

const news = [];

const KEY = 'news';

export default {
    saveNews(article, date) {
        this.news = this.getNews();

        article.id = this.news.length + 1;
        article.category = categoriesService.getCategory(article.category.id);
        article.reporter = reportersService.getReporter(article.reporter.id);
        article.date = moment(date).valueOf();

        this.news.push(article);

        this.news.sort(function(a, b) {
            if(a.date < b.date) return -1;
            if(a.date > b.date) return 1;
            return 0;
        }).reverse();

        localStorageService.saveToLocalStorage(KEY, this.news);
    },
    getArticle(id) {
        this.news = this.getNews();
        return this.news.find(n => n.id == id);
    },
    getNews() {
        return localStorageService.getFromLocalStorage(KEY);
    }
}
