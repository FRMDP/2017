import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		counter: 4,
		equipos:[],
		partidosDia:[],
		partidoActual:''
	},
	mutations: {
		todosEquipos(state, lista)
		{
			state.equipos.push(lista);
		},
		todosPartidos(state, lista)
		{
			state.partidosDia.push(lista);
		},
		partidoVisto(state, partido)
		{
			state.partidoActual = partido;
		}
	},
	getters: {
		lista: state => state.equipos,
		partidosday: state => state.partidosDia,
		partidover: state => state.partidoActual
	}
})
