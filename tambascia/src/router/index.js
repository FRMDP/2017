import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from 'vue-router'
import ppalEn from '@/components/co-ppalEn.vue';
import chooseLanguage from '@/components/co-chooseLanguage.vue';
import categoriesEn from '@/components/co-articlesByCategoryEn.vue';
import notFoundEn from '@/components/co-notFoundEn.vue'
//import oneNewEn from '@/components/co-oneNewEn.vue';

Vue.use(VueRouter)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'chooseLanguage',
      component: chooseLanguage,
    },
    {
      path: '/en/ppal',
      name: 'ppalEn',
      component: ppalEn
    },
    {
      path: '/de/',
      //component: ppalDe
    },
    {
      path: '/en/category/:id',
      name: 'categoriesEn',
      component: categoriesEn
    },
    {
      path: '/*',
      name: 'notFoundEn',
      component: notFoundEn
    },
    {
      path: '/*',
      name: 'notFoundEn',
      redirect: '/#/notFound'
    },

    /*{
      path: '/en/oneNew/:id',
      name: 'oneArticleEn',
      component: oneNewEn
    }*/
  ]
})
