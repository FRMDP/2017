import storageService from '../services/storageService';

let articlesFromApi = [];
let articlesByCategory = [];
let sources = [];

export default {
    //aca va top latest or popular como parametro
    getAllArticles (sortBy) {
        axios.get('https://newsapi.org/v1/articles?source=the-next-web&sortBy=' +sortBy+ '&apiKey=37b900c6d7da47c7b6b9c5557cec86ba')
            .then(response => articlesFromApi.push(response.data))
            .catch(error => console.log('There was the following error loading news: ' + error));
        return articlesFromApi;
    },
    getAllSourcesEnglish (){
        axios.get(' https://newsapi.org/v1/sources?language=en')
            .then(response => sources.push(response.data))
            .catch(error => console.log('There was the following error loading sources: ' + error));
        console.log(sources);
        return sources;
    },
    getAllArticlesGerman (){
        axios.get('https://newsapi.org/v1/sources?language=de')
            .then(response => articlesFromApi.push(response.data))
            .catch(error => console.log('There was the following error loading news: ' + error));
        return articlesFromApi;
    },
    // aca va las disitntas sources que provee la api
    getArticlesBySource (articleSource){
        return axios.get('https://newsapi.org/v1/articles?source=' +articleSource+ '&apiKey=37b900c6d7da47c7b6b9c5557cec86ba')
            //.then(response => articlesFromApi.push(response.data))
            //.catch(error => console.log('There was the following error loading news: ' + error));
        //return articlesFromApi;
    },
    getArticlesByCategory (articleCategory){
       articlesByCategory = [];
        axios.get('https://newsapi.org/v1/sources?category=' +articleCategory)
            .then(response => articlesByCategory.push(response.data))
            .catch(error => console.log('There was the following error loading news: ' + error));
        return articlesByCategory;
    },
    getArticleById (articleId){
      debugger;
      let articleById = articlesFromApi[articleId];
      return articleById
    },
    getArticleByCountry (countryAb) {
      axios.get('https://newsapi.org/v1/sources?country=' +countryAb)
        .then(response => articlesFromApi.push(response.data))
        .catch(error => console.log('There was the following error loading news: ' + error));
      return articlesFromApi;
    },
    getSources (){
      axios.get('static/sources.json')
        .then(response => sources.push(response.data))
        .catch(error => console.log('There was the following error loading sources: ' + error));
      return sources;
    }
}
