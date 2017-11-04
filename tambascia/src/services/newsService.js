import categoriesService from '../services/categoriesService';
import reportersService from '../services/reportersService';
const newsFromApi = [];
let categories = [];
export default {
    updateNews(){
        axios.get('http://localhost:8090/news')
            .then(response => newsFromApi.push(...response.data._embedded.news))
            .catch(error => console.log('there was the following error loading news: ' + error ));
    },
    getNews() {
        axios.get('http://localhost:8090/news')
            .then(response => newsFromApi.push(...response.data._embedded.news))
            .catch(error => console.log('there was the following error loading news: ' + error ));

        return newsFromApi;
    },

    getNewById(newId){
        return newsFromApi.find(article => {
            return article.uid == newId
        });
    },

    getNewByCategory(categoryId){
        categories = [];
        axios.get('http://localhost:8090/categories/'+ categoryId +'/news')
            .then(response => categories.push(response.data._embedded.news))
            .catch(error => console.log('there was the following error loading news: ' + error ));
        return categories;
        //return JSON.parse(localStorage.getItem('news')).filter(news => news.category.id == categoryId);
    },
    addNew(newToadd) {
        //const reporter = reportersService.getReporters(newToadd.reporter.uid);
        //const category = categoriesService.getCategory(newToadd.category.uid)
        axios.post('http://localhost:8090/news',{
                title: newToadd.title,
                body: newToadd.body,
                date: Date.now(),
                reporter: newToadd.reporter,
                category: newToadd.category

        })
            .catch(error => console.log('there was the following error adding news: ' + error ));

    },
/*
    addNew(newToadd) {
        this.newsArray = this.getNews();
        newToadd.id = this.newsArray.length + 1;
        newToadd.category = categoriesService.getCategory(newToadd.category.id);
        newToadd.reporter = reportersService.getReporters(newToadd.reporter.id);
        this.newsArray.push(newToadd);
        localStorage.setItem('news', JSON.stringify(this.newsArray));
    }
*/
}