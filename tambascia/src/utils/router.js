import VueRouter from 'vue-router';
import ppalEn from '../components/co-ppalEn.vue';
import chooseLanguage from '../components/co-chooseLanguage.vue';
import categoriesEn from '../components/co-articlesByCategoryEn.vue';
//import notFoundEn from '../components/notFoundEn.vue';

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: chooseLanguage,
        },
        {
            path: '/en/ppal',
            component: ppalEn
        },
        {
            path: '/de/',
            //component: ppalDe
        },
        {
            path: '/en/category/:id',
            component: categoriesEn
        }


]
})
;
