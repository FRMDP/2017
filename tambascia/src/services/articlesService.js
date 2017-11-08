import storageService from '../services/storageService';

const articlesFromApi = [];

export default {
    //aca va top latest or popular como parametro
    getAllArticles (sortBy) {
        axios.get('https://newsapi.org/v1/articles?source=the-next-web&sortBy=' +sortBy+ '&apiKey=37b900c6d7da47c7b6b9c5557cec86ba')
            .then(response => articlesFromApi.push(response.data))
            .catch(error => console.log('There was the following error loading news: ' + error));
        return articlesFromApi;
    },
    getAllArticlesEnglish (){
        axios.get(' https://newsapi.org/v1/sources?language=en')
            .then(response => articlesFromApi.push(response.data))
            .catch(error => console.log('There was the following error loading news: ' + error));
        return articlesFromApi;
    },
    getAllArticlesGerman (){
        axios.get('https://newsapi.org/v1/sources?language=de')
            .then(response => articlesFromApi.push(response.data))
            .catch(error => console.log('There was the following error loading news: ' + error));
        return articlesFromApi;
    },
    // aca va las disitntas sources que provee la api
    getArticlesBySource (articleSource){
        axios.get('https://newsapi.org/v1/articles?' +articleSource+ '=techcrunch&apiKey=37b900c6d7da47c7b6b9c5557cec86ba')
            .then(response => articlesFromApi.push(response.data))
            .catch(error => console.log('There was the following error loading news: ' + error));
        return articlesFromApi;
    },
    getArticlesByCategory (articleCategory){
        axios.get('https://newsapi.org/v1/sources?category=' +articleCategory)
            .then(response => articlesFromApi.push(response.data.sources))
            .catch(error => console.log('There was the following error loading news: ' + error));
        return articlesFromApi;
    }


}