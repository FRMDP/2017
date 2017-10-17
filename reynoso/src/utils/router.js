import VueRouter from 'vue-router'
import addNews from '../components/add-news.vue'
import startNews from '../components/start-news.vue'
import categoryNews from '../components/category-news.vue'
import oneNew from '../components/one-new.vue'
//import reporterProfile from '../components/reporter-profile'

export default new VueRouter({
  routes: [
	  { path: '/add', component: addNews },
	  { path: '/', component: startNews},
	  { path: '/category/:name', component: categoryNews },
      { path: '/new/:id', component: oneNew , name:'onenew'},
	  //{ path: '/reporter/:id', component: reporterProfile}
	]
});