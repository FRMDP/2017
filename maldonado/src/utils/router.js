import VueRouter from 'vue-router'
import fmNews from '../components/fm-news.vue'
import fmAddNew from '../components/fm-addNew.vue'
//import fmOneNew from '../components/fm-oneNew' Aun no implementado
import fmCategory from '../components/fm-category.vue'
//import fmNewByCategory from '../components/fm-byCategory' Aun no implementado
//import fmReporter from '../components/fm-reporter.vue' se deja para el final por si hago perfil de reportero

export default new VueRouter({
  routes: [
  	  { path: '/news', component: fmNews},
  	  { path: '/addNew', component: fmAddNew },
  	  //{ path: '/oneNew/:id', component: fmOneNew },
	  { path: '/category/:id', component: fmCategory },
	]
});