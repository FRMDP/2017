import storageService from "./storageService";

const KEY = 'news';

export default {
    getArticle(id) {
        const articles = this.getCategories();
        return articles.find(n => n.id == id);
    },
    getArticles() {
        return storageService.getFromLocalStorage(KEY);
    },
    saveArticle(articles) {
        storageService.saveToLocalStorage(KEY, articles);
    }
}
