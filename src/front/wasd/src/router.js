import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load (component) {
  // '@' is aliased to src/components
  return () => import(`@/${component}.vue`)
}

export default new VueRouter({
  /*
   * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with "history" mode, please also open /config/index.js
   * and set "build.publicPath" to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * If switching back to default "hash" mode, don't forget to set the
   * build publicPath back to '' so Cordova builds work again.
   */

  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),

  routes: [
    {
      path: '/',

      component: load('WasdLayout'),

      redirect: '/home',

      children: [
        {
          path: '/home',
          component: load('WasdLanding')
        },
        {
          path: '/login',
          component: load('Error404')
        },
        {
          path: '/discover',
          component: load('Error404')
        },
        {
          path: '/genres',
          component: load('Error404')
        },
        {
          path: '/platforms',
          component: load('Error404')
        },
        {
          path: '/soon',
          component: load('Error404')
        },
        {
          path: '/releases',
          component: load('Error404')
        },
        {
          path: '/ratings',
          component: load('Error404')
        },
        {
          path: '/engines',
          component: load('Error404')
        },
        {
          path: '/news',
          component: load('Error404')
        },
        {
          path: '/search',
          component: load('Error404')
        }
      ]
    },

    // Always leave this last one
    { path: '*', component: load('Error404') } // Not found
  ]
})
