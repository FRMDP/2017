// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import socketio from 'socket.io-client'
import store from './store/store'

Vue.config.productionTip = false
Vue.use(BootstrapVue);

Vue.prototype.$http = axios;
Vue.prototype.$socket = socketio;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
