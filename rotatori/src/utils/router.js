import VueRouter from 'vue-router'

import zpPortada from '../components/zp-portada.vue'
import zpPruebas from '../components/zp-pruebas.vue'
import zpSearch from '../components/zp-search.vue'
import zpLyric from '../components/zp-lyric.vue'
import zpResult from '../components/zp-result.vue'

export default new VueRouter({
	routes: [
		{ path: '/', component: zpPortada, name: 'index' },
		{ path: '/search', component: zpSearch, name: 'search' },
		{ path: '/result/:name', component: zpResult, name: 'result', beforeEnter: (to, from, next) => {
			console.log('to', to);
			console.log('from', from);
			console.log('next', next);
		} },
		{ path: '/lyrics/:id/:name', component: zpLyric, name: 'lyric' }
	]
});