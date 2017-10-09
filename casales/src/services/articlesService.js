import storageService from "./storageService";
import categoriesService from "./../services/categoriesService";
import reportersService from "./../services/reportersService";

const articles = [];

const KEY = 'news';

export default {
    getArticle(id) {
        const articles = this.getCategories();
        return articles.find(n => n.id == id);
    },
    getArticles() {
        return storageService.getFromLocalStorage(KEY);
    },
    saveArticle(article) {
        this.articles = this.getArticles();

        article.id = this.articles.length + 1;
        article.category.name = categoriesService.getCategory(article.category.id).name;
        article.reporter.name = reportersService.getReporter(article.reporter.id).name;

        this.articles.push(article);

        storageService.saveToLocalStorage(KEY, this.articles);
    }
}
