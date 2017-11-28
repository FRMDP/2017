const ApiKeyNews = "37b900c6d7da47c7b6b9c5557cec86ba";

let articlesByCategory = [];
let sources = [];
let articlesBySearch = [];

export default {
  getAllSourcesEnglish() {
    axios.get('https://newsapi.org/v2/sources?language=en&apiKey=' +ApiKeyNews)
      .then(response => sources.push(response.data))
      .catch(error => console.log('There was the following error loading sources: ' + error));
    return sources;
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

  }
}
