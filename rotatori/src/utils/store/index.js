import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        typeSearch: ''
    },
    mutations: {
        putTypeSearch(state, text){
            state.typeSearch = text;
        }
    },
    getters: {
        
    }
})