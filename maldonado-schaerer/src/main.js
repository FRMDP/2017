import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
import socketio from 'socket.io-client'

import App from './components/App.vue'
import router from './utils/router'
import store from './store/index.js'

import chatStorageService from './services/chatStorageService'



Vue.use(VueRouter);
Vue.use(BootstrapVue);

Vue.prototype.$http = axios;
Vue.prototype.$socket = socketio;
Vue.prototype.$chatStorageService = chatStorageService;

Vue.config.productionTip = false



new Vue({
	router,
	store,
    el: 'app',
    render: h => h(App)
})