import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './components/App.vue'
import router from './utils/router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import axios from 'axios'
import BootstrapVue from 'bootstrap-vue'

import socketio from 'socket.io-client'
import VueSocketio from 'vue-socket.io'
export const SocketInstance = socketio('http://localhost:3000'); 
Vue.use(VueSocketio, SocketInstance);
Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.prototype.$http = axios;



new Vue({
	router,
    el: '#app',
    render: h => h(App)
})
