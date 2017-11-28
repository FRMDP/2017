import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		counter: 4
	},
	mutations: {
		addOne(state) {
			state.counter += 1;
		},
		addNumber(state, number) {
			state.counter += number;
		},
	},
	getters: {
		twice: state => state.counter * 2
	}
})