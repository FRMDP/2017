import Vue from 'vue';
import Vuex from 'vuex';
import VuexSaga from 'vuex-saga';
import articles from './modules/articles'
//import actions from './actions'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    articles
  }
})

Vue.use(VuexSaga, { store: store })

export default store;
