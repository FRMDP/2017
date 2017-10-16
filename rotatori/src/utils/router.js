import VueRouter from 'vue-router'

import zpNews from '../components/zp-news.vue'
import zpCategories from '../components/zp-categories.vue'
import zpNew from '../components/zp-new.vue'
import zpAddnew from '../components/zp-addnew.vue'
import zp404 from '../components/zp-404.vue'

export default new VueRouter({
  routes: [
		{ path: '/', component: zpNews},
		{ path: '/addnew', component: zpAddnew },
		{ path: '/news/:id', component: zpNew, name: 'newById'},
		{ path: '/404', component: zp404 },
		{ path: '/categories/:id', component: zpCategories, name: 'catById'}
	]
});