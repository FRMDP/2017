import VueRouter from 'vue-router'
import fmNews from '../components/fm-news.vue'
import fmAddNew from '../components/fm-addNew.vue'
import fmOneNew from '../components/fm-oneNew.vue'
import fmNewsByCategory from '../components/fm-newsByCategory.vue'
import fmReporter from '../components/fm-reporter.vue'

export default new VueRouter({
  routes: [
  	  { path: '/news', component: fmNews },
  	  { path: '/addNew', component: fmAddNew },
  	  { path: '/oneNew', component: fmOneNew },
	  { path: '/category/:id', component: fmNewsByCategory, name: 'category' },
	  { path: '/reporters/:id', component: fmReporter }
	]
});