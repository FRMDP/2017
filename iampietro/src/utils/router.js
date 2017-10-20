import VueRouter from 'vue-router'

import viewOneNew from '../components/view-oneNew.vue'
import addNew from '../components/add-new.vue'
import news from '../components/view-allNews.vue'
import newsPerCategory from '../components/view-perCategory.vue'

export default new VueRouter({
  routes: [
	  { path: '/createNew', component: addNew },
	  { path : '/particularNew/:id', component: viewOneNew, name: 'particular' }, // para pasar parametros, declarar 
	  { path :  '/news', component: news },										  // el name  SI O SI
	  { path : '/category/:id', component: newsPerCategory, name: 'genre' }
	]
});