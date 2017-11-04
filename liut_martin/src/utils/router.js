import VueRouter from 'vue-router'
import viewNew   from '../components/view-new.vue'
import allNews   from '../components/all-news.vue'
import addNew    from '../components/add-new.vue'
import categoryNew    from '../components/category-new.vue'

export default new VueRouter({
  routes: [
		{ path: '/',         component: allNews , name: 'news'},
		{ path: '/new/:id',  component: viewNew , name: 'view-new'},
		{ path: '/add-new/', component: addNew  , name: 'add-new'},
		{ path: '/category/:id/news', component: categoryNew  , name: 'category-new'}
	]
});