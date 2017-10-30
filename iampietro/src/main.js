import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import socketio from 'socket.io-client';
import VueSocketIO from 'vue-socket.io';

import App from './components/App.vue'
import router from './utils/router'

export const SocketInstance = socketio('http://localhost:3000');

Vue.use(VueRouter)
Vue.use(VueSocketIO, SocketInstance)

Vue.prototype.$http = axios

new Vue({
	router,
    el: '#app',
    render: h => h(App)
})
