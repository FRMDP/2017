import VueRouter from 'vue-router'
import viewCreateNews from '../components/viewCreateNews.vue'
import viewHome from '../components/viewHome.vue'
import singleNews from '../components/singleNews.vue'
import viewNewsCat from '../components/viewNewsCat.vue'
import viewForobardo from '../components/viewForobardo.vue'

export default new VueRouter({
  routes: [
	  { path: '/create', component: viewCreateNews },
	  { path: '/', component: viewHome },
	  { path: '/singlenews/:id', component: singleNews },
	  { path: '/newscat/:name', component: viewNewsCat },
	  { path: '/foro', component: viewForobardo }
	]
});