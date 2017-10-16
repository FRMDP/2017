import VueRouter from 'vue-router'
import addNews from '../components/add-news.vue'
import startNews from '../components/start-news.vue'

export default new VueRouter({
  routes: [
	  { path: '/add', component: addNews },
	  { path: '/', component: startNews}
	]
});