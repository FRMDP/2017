import VueRouter from 'vue-router'

import zpPortada from '../components/zp-portada.vue'
import zpPruebas from '../components/zp-pruebas.vue'
import zpSearch from '../components/zp-search.vue'

export default new VueRouter({
	routes: [
		{ path: '/', component: zpPortada, name: 'index' },
		{ path: '/search', component: zpSearch, name: 'search' },
		{ path: '/result/:name', component: zpPruebas, name: 'result' },
	]
});