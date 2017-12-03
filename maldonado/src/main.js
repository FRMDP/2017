import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import socketio from 'socket.io-client'

import App from './frontend/components/App.vue'
import router from './frontend/utils/router'

Vue.use(VueRouter);

Vue.prototype.$http = axios;
Vue.prototype.$socket = socketio;

new Vue({
	router,
    el: '#app',
    render: h => h(App)
})
