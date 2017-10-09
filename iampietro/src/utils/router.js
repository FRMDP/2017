import VueRouter from 'vue-router'

import viewOneNew from '../components/view-oneNew.vue'
import addNew from '../components/add-new.vue'
import news from '../components/view-allNews.vue'
import newsPerCategory from '../components/view-perCategory.vue'

export default new VueRouter({
  routes: [
	  { path: '/createNew', component: addNew },
	  { path : '/new/:id', component: viewOneNew },
	  { path :  '/news', component: news },
	  { path : '/category/:id', component: newsPerCategory }
	]
});