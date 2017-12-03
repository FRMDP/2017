import VueRouter from 'vue-router'
import addNews from '../components/add-news.vue'
import startNews from '../components/start-news.vue'
import categoryNews from '../components/category-news.vue'
import oneNew from '../components/one-new.vue'
import newsReporters from '../components/news-reporters.vue'
import reportersCard from '../components/reporters-card.vue'

export default new VueRouter({
  routes: [
	  { path: '/add', component: addNews },
	  { path: '/', component: startNews},
	  { path: '/category/:name', component: categoryNews },
      { path: '/new/:id', component: oneNew , name:'onenew'},
	  { path: '/reporters', component: newsReporters},
	  { path: '/reporters/:id', component: reportersCard, name:'onereporter'}
	]
});