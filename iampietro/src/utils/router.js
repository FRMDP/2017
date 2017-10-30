import VueRouter from 'vue-router'

import viewOneNew from '../components/view-oneNew.vue'
import addNew from '../components/add-new.vue'
import news from '../components/view-allNews.vue'
import newsPerCategory from '../components/view-perCategory.vue'

export default new VueRouter({
  routes: [
	  { path: '/createNew', component: addNew },
	  { path : '/particularNew', component: viewOneNew}, // para pasar parametros, declarar name
	  { path :  '/news', component: news },										  
	  { path : '/category/:id', component: newsPerCategory, name: 'genre' }
	]
});