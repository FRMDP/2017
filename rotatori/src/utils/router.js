import VueRouter from 'vue-router'

import zpNews from '../components/zp-news.vue'

/*import compUno from '../components/comp-uno.vue'
import compDos from '../components/comp-dos.vue'
import compTres from '../components/comp-tres.vue'
*/
export default new VueRouter({
  routes: [
	  { path: '/news', component: zpNews }
	]
});