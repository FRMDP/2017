import VueRouter from 'vue-router';

import allNews from '../components/view-allNews.vue';
import addNew from '../components/view-addNew.vue';
import allNewsByCategory from '../components/view-allNewsByCategory.vue';
import oneNew from '../components/view-oneNew.vue';

export default new VueRouter({
  routes: [
    {
        path: '/add',
        component: addNew
    },
    {
        path: '/',
        component: allNews
    },
    {
        path: '/category/:id',
        component: allNewsByCategory
    },
    {
        path: '/new/:id',
        component: oneNew
    },
	]
});
