import VueRouter from 'vue-router'

import zpNews from '../components/zp-news.vue'
import zpCategories from '../components/zp-categories.vue'
import zpNew from '../components/zp-new.vue'
import zpAddnew from '../components/zp-addnew.vue'

export default new VueRouter({
  routes: [
		{ path: '/', component: zpNews},
		{ path: '/news', component: zpNews },
		{ path: '/addnew', component: zpAddnew },
		{ path: '/news/:id', component: zpNew, name: 'newById'},
		{ path: '/categories/:id', component: zpCategories, name: 'catById'}
	]
});