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

          component: load('WasdDiscover')
        },
        {
          path: '/genres',

          component: load('WasdGenres')
        },
        {
          path: '/platforms',

          component: load('WasdPlatforms')
        },
        {
          path: '/soon',

          component: load('Error404')
        },
        {
          path: '/releases',

          component: load('WasdNewReleases')
        },
        {
          path: '/ratings',

          component: load('Error404')
        },
        {
          path: '/engines',

          component: load('WasdGameEngines')
        },
        {
          path: '/news',

          component: load('WasdNews')
        },
        {
          path: '/companies',

          component: load('WasdGameCompanies')
        },
        {
          path: '/search',

          component: load('Error404')
        },
        {
          path: '/game/:id',

          name: 'game',

          component: load('WasdGameInfosite')
        },
        {
          path: '/platforms/:id',

          name: 'platforms',

          component: load('WasdGamesByPlatform')
        },
        {
          path: '/engines/:id',

          name: 'engine',

          component: load('WasdGameEngineInfosite')
        },
        {
          path: '/companies/:id',

          name: 'company',

          component: load('WasdCompanyInfosite')
        }
      ]
    },

    // Always leave this last one
    { path: '*', component: load('Error404') } // Not found
  ]
})
