import VueRouter from 'vue-router'
import fmNews from '../../frontend/components/fm-news.vue'
import fmAddNew from '../../frontend/components/fm-addNew.vue'
import fmOneNew from '../../frontend/components/fm-oneNew.vue'
import fmNewsByCategory from '../../frontend/components/fm-newsByCategory.vue'
import fmReporter from '../../frontend/components/fm-reporter.vue'

export default new VueRouter({
  routes: [
  	  { path: '/news', component: fmNews },
  	  { path: '/addNew', component: fmAddNew },
  	  { path: '/oneNew', component: fmOneNew },
	  { path: '/category/:id', component: fmNewsByCategory, name: 'category' },
	  { path: '/reporters/:id', component: fmReporter }
	]
});