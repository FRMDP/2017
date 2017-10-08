import VueRouter from 'vue-router'

import viewOneNew from '../components/view-oneNew.vue'
import addNew from '../components/add-new.vue'
import sports from '../components/view-sports.vue'
import world from '../components/view-world.vue'
import local from '../components/view-local.vue'
import economy from '../components/view-economy.vue'
import politics from '../components/view-politics.vue'
import entertainment from '../components/view-entertainment.vue'

export default new VueRouter({
  routes: [
	  { path: '/createNew', component: addNew },
	  { path : '/new/:id', component: viewOneNew },
	  { path : '/sports', component: sports },
	  { path : '/world', component: world },
	  { path : '/local', component: local },
	  { path : '/economy', component: economy },
	  { path : '/politics', component: politics },
	  { path : '/entertainment', component: entertainment }

	]
});