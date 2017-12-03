import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './components/App.vue'
import router from './utils/router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import Axios from 'axios'
import io from 'socket.io-client'

Vue.use(VueMaterial);
Vue.use(VueRouter);
Vue.prototype.$http = Axios;
Vue.prototype.$socket = io('http://localhost:3000');

new Vue({
	router,
    el: '#app',
    render: h => h(App)
})
