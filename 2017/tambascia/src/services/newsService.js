import categoriesService from '../services/categoriesService';
import reportersService from '../services/reportersService';

const newsArray = [];
export default {
    getNews() {
        let newsAlmacenadas  = JSON.parse(localStorage.getItem('news'));
        if(newsAlmacenadas === null || newsAlmacenadas === undefined){
            newsAlmacenadas = []
        }
        return newsAlmacenadas;
    },
    getNewById(newId){
        return JSON.parse(localStorage.getItem('news')).find(news => news.id == newId);
    },

    getNewByCategory(categoryId){
        return JSON.parse(localStorage.getItem('news')).filter(news => news.category.id == categoryId);
    },

    addNew(newToadd) {
        this.newsArray = this.getNews();
        newToadd.id = this.newsArray.length + 1;
        newToadd.category = categoriesService.getCategory(newToadd.category.id);
        newToadd.reporter = reportersService.getReporters(newToadd.reporter.id);
        this.newsArray.push(newToadd);
        localStorage.setItem('news', JSON.stringify(this.newsArray));
    }

}