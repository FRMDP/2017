import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        typeSearch: '',
        songs:[],
        backPathSearch: '',
        countries: [],
    },
    mutations: {
        putTypeSearch(state, text){
            state.typeSearch = text;
        },
        putSongs(state, trackList){
            state.songs = trackList;
        },
        clearArray(state){
            state.songs = [];
        },
        putBackPath(state, path){
            state.backPathSearch = path;
        },
        putCountries(state, countries){
            state.countries = countries;
        }
    },
    getters: {
        
    }
})