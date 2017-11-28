
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

    state:{
      driverResult: [],
      name:''
    },
    getters:{

      getOneResult: (state, getters) => (season,stage,position) => {
        return  state.driverResult.filter(n =>  n.season == season && n.stage == stage && n.position == position);
      },
      getName:(state, getters) => (season,stage,position) => {
        const aa = state.driverResult.filter(n =>  n.season == season && n.stage == stage && n.position == position);
        return  aa[0].driverSurename;
      }
    },
    mutations:{
      addResultDriver(state,resultDriver){
        state.driverResult = resultDriver;
      },
      saveNameChat(state,name){
          state.name = name;
      }
    }
});
