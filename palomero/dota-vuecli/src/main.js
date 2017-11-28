// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import axios from 'axios'
import BootstrapVue from 'bootstrap-vue'

import socketio from 'socket.io-client'
import VueSocketio from 'vue-socket.io'
export const SocketInstance = socketio('http://localhost:3000'); 
Vue.use(VueSocketio, SocketInstance);
Vue.use(BootstrapVue);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
