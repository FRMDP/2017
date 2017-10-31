import categoriesService from '../services/categoriesService';
import reportersService from '../services/reportersService';
const newsFromApi = [];
let categories = [];
export default {
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
    },
    addNew(newToadd) {
        axios.post('http://localhost:8090/news',{
                title: newToadd.title,
                body: newToadd.body,
                date: Date.now(),
                reporter: newToadd.reporter,
                category: newToadd.category

        })
            .catch(error => console.log('there was the following error adding news: ' + error ));

    },
}