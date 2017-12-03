import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './componentes/App.vue'
import router from './utils/router'
import VueSocketio from 'vue-socket.io'

Vue.use(VueSocketio,'http://localhost:3000')
Vue.use(VueRouter)

new Vue({
	router,
    el: '#app',
    render: h => h(App)
})
