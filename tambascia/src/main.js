import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App.vue'
import router from './utils/router'
import VueSocketio from 'vue-socket.io';


Vue.use(VueRouter)
Vue.use(VueSocketio, 'http://localhost:5000');

new Vue({
	router,
    el: '#app',
    render: h => h(App)
})

