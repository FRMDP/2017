import VueRouter from 'vue-router'

import zpNews from '../components/zp-news.vue'
import zpCategories from '../components/zp-categories.vue'
import zpNew from '../components/zp-new.vue'

export default new VueRouter({
  routes: [
		{ path: '/', component: zpNews},
		{ path: '/news', component: zpNews },
		{ path: '/news/:id', component: zpNew, name: 'New'},
		{ path: '/categories', component: zpCategories}
	]
});