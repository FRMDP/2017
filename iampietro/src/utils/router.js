import VueRouter from 'vue-router'

import viewPerCategory from '../components/view-perCategory'
import viewAllNews from '../components/view-allNews'
import viewOneNew from '../components/view-oneNew'
import addNew from '../components/add-new'

export default new VueRouter({
  routes: [
	  { path: '/news', component: viewAllNews },
	  { path: '/createNew', component: addNew },
	  { path: '/category/:id', component: viewPerCategory },
	  { path : '/new/:id', component viewOneNew }
	]
});