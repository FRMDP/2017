import Vue from 'vue'
import VueMaterial from 'vue-material'
import VueSession from 'vue-session'
import axios from 'axios'
import VuePaginate from 'vue-paginate'
import store from './utils/store'
import router from './utils/router'
import VueSocketIO from 'vue-socket.io'
import socketio from 'socket.io-client'

export const socketInstance = socketio('http://127.0.0.1:3000');

Vue.use(VuePaginate)
Vue.use(VueMaterial);
Vue.use(VueSession);
Vue.use(VueSocketIO, socketInstance);


import App from './components/App.vue'
import apiRoutes from './utils/apiRoutes'
import user from './utils/storage/userStorage'
import tracks from './utils/storage/trackStorage'

Vue.prototype.$http = axios
Vue.prototype.$apiRoutes = apiRoutes
Vue.prototype.$users = user
Vue.prototype.$tracks = tracks

new Vue({
    store,
    router,
    el: '#app',
    render: h => h(App)
})