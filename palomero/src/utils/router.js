import VueRouter from 'vue-router'
import addNew from '../components/add-new.vue'
import viewAll from '../components/view-all.vue'
import viewCategory from '../components/view-category.vue'
import viewSpecific from '../components/view-specific.vue'

export default new VueRouter({
  routes: [
      { path: '/add', component: addNew },
	  { path: '/all', component: viewAll },
	  { path: '/category/:id', component: viewCategory },
	  { path: '/news/:id', component: viewSpecific}
	]
});