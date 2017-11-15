// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
require('./assets/app.scss');
window.axios = require('axios');
window.$ = window.jQuery = require('jquery');
window.Popper = require('popper.js');
require('bootstrap');

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VuePaginate from 'vue-paginate'


Vue.use(VuePaginate);
Vue.config.productionTip = false;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
