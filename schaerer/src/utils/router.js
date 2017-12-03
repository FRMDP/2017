import VueRouter from 'vue-router';
import viewAddNew from '../components/view-addNew.vue';
import viewAllNews from '../components/view-allNews.vue';
import viewOneNew from '../components/view-oneNew.vue';
import viewCategoryNews from '../components/view-categoryNews.vue';

export default new VueRouter({
  routes: [
	 { path: '/addNews', component: viewAddNew},
	 { path: '/news', component: viewAllNews},
	 { path: '/oneNews/', component: viewOneNew},
	 { path: '/category', component: viewCategoryNews}
	]
});