import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './componentes/App.vue'
import router from './utils/router'
import VueSocketio from 'vue-socket.io'
const api = require('./config/api.json');

Vue.use(VueSocketio,api.apiUrl)
Vue.use(VueRouter)

new Vue({
	router,
    el: '#app',
    render: h => h(App)
})
