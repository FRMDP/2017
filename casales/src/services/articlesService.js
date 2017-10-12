import storageService from "./storageService";
import categoriesService from "./../services/categoriesService";
import reportersService from "./../services/reportersService";
import moment from "moment";

const articles = [];

const KEY = 'news';

export default {
    getArticle(id) {
        this.articles = this.getArticles();
        return this.articles.find(n => n.id == id);
    },
    getArticles() {
        return storageService.getFromLocalStorage(KEY);
    },
    saveArticle(article, date) {
        this.articles = this.getArticles();

        article.id = this.articles.length + 1;
        article.category = categoriesService.getCategory(article.category.id);
        article.reporter = reportersService.getReporter(article.reporter.id);
        article.date = moment(date).valueOf();

        this.articles.push(article);

        storageService.saveToLocalStorage(KEY, this.articles);
    }
}
