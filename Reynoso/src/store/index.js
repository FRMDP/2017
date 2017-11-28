import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        heroes:[],
    },
    mutations:{
        setHeroes(state,heroes){
            state.heroes = heroes;
        },
        setMatches(state,matches){
            state.matches= matches;
        }
    },
    getters:{
        getHeroes:state=>{
            return state.heroes;
        }
    }
})
