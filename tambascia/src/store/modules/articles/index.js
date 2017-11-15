import articleService from '../../../services/articlesService';
import { call, put } from 'vuex-saga'
const state = {
  articles: []
};
const mutations = {
  setArticles(state, articles){
    state.articles = articles;
  },
};
const actions = {
  *setArticles(store, source){
    let promiseArticles = () => articleService.getArticlesBySource(source);
    let articles = yield call(promiseArticles);
    yield put("setArticles", articles.data);
    return null;
  }
};
const getters = {
  getArticles: state => {
    return state.articles;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
