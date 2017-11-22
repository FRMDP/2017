const ApiKeyNews = "37b900c6d7da47c7b6b9c5557cec86ba";


let articlesFromApi = [];
let articlesByCategory = [];
let sources = [];
let articlesBySearch = [];

export default {
  //aca va top latest or popular como parametro
  getAllArticles(sortBy) {
    axios.get('https://newsapi.org/v1/articles?source=the-next-web&sortBy=' + sortBy + '&apiKey=' +ApiKeyNews)
      .then(response => articlesFromApi.push(response.data))
      .catch(error => console.log('There was the following error loading news: ' + error));
    return articlesFromApi;
  },
  getAllSourcesEnglish() {
    axios.get('https://newsapi.org/v2/sources?language=en&apiKey=' +ApiKeyNews)
      .then(response => sources.push(response.data))
      .catch(error => console.log('There was the following error loading sources: ' + error));
    return sources;
  },
  getAllArticlesGerman() {
    axios.get('https://newsapi.org/v1/sources?language=de')
      .then(response => articlesFromApi.push(response.data))
      .catch(error => console.log('There was the following error loading news: ' + error));
    return articlesFromApi;
  },
  // aca va las disitntas sources que provee la api
  getArticlesBySource(articleSource) {
    return axios.get('https://newsapi.org/v2/top-headlines?sources=' + articleSource + '&apiKey=' +ApiKeyNews);
  },
  getArticlesByCategory(articleCategory) {
    articlesByCategory = [];
    axios.get('https://newsapi.org/v2/sources?category=' + articleCategory + '&apiKey=' +ApiKeyNews)
      .then(response => articlesByCategory.push(response.data))
      .catch(error => console.log('There was the following error loading news: ' + error));
    return articlesByCategory;
  },
  searchInTheAPI(whatToSearch) {
    articlesBySearch = [];
    axios.get('https://newsapi.org/v2/everything?q=' + whatToSearch + '&apiKey=' +ApiKeyNews)
      .then(response => articlesBySearch.push(response.data))
      .catch(error => console.log('There was the following error loading news: ' + error));
    return articlesBySearch;
  },
  searchInTheAPIByDate(whatToSearch, dateFrom, dateTo) {
    articlesBySearch = [];
    axios.get('https://newsapi.org/v2/everything?q=' +whatToSearch+ '&from=' +dateFrom+ '&to=' +dateTo+ '&apiKey=' +ApiKeyNews)
      .then(response => articlesBySearch.push(response.data))
      .catch(error => console.log('There was the following error loading news: ' + error));
    return articlesBySearch;

  },
  getArticleById(articleId) {
    let articleById = articlesFromApi[articleId];
    return articleById
  },
  getArticleByCountry(countryAb) {
    axios.get('https://newsapi.org/v1/sources?country=' + countryAb)
      .then(response => articlesFromApi.push(response.data))
      .catch(error => console.log('There was the following error loading news: ' + error));
    return articlesFromApi;
  }
}
