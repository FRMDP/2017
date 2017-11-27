import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './actions'
// import * as getters from './getters'
import igdbPlatforms from './modules/igdb-platforms'
import igdbGenres from './modules/igdb-genres'

Vue.use(Vuex)

export default new Vuex.Store({
  // actions,
  // getters,
  modules: {
    igdbPlatforms,
    igdbGenres
  }
})
