import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        typeSearch: '',
        array:[],
        backPathSearch: '',
        countries: [],
        user: '',
    },
    mutations: {
        putTypeSearch(state, text){
            state.typeSearch = text;
        },
        putSongs(state, trackList){
            state.array = trackList;
        },
        clearArray(state){
            state.array = [];
        },
        putBackPath(state, path){
            state.backPathSearch = path;
        },
        putCountries(state, countries){
            state.countries = countries;
        },
        putUser(state, user){
            state.user = user;
        },
        clearUser(state){
            state.user = '';
        }
    },
    getters: {
        getCountries: state => state.countries,
        getUser: state => state.user,
    }
})