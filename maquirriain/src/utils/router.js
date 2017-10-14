import VueRouter from 'vue-router'
/*import compUno from '../components/comp-uno.vue'
import compDos from '../components/comp-dos.vue'
import compTres from '../components/comp-tres.vue'*/
import rmAddNews from '../components/rm-addNews.vue';
import rmAllNews from '../components/rm-allNews.vue';
import rmOneNews from '../components/rm-oneNews.vue';
import rmCategoryNews from '../components/rm-categoryNews.vue';

export default new VueRouter({
  routes: [

    {path: '/add', component: rmAddNews},
    {path: '/', component: rmAllNews},
    {path: '/category/:name', component: rmCategoryNews},
    {path: '/:name/:id', component: rmOneNews}
	]
});
