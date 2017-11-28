import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		side: ''
	},
	mutations: {
		chooseSide(state, decision) {
			state.side = decision;
		}
	}
})