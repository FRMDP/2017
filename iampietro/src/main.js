import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAsyncProperties from 'vue-async-properties'

import App from './components/App.vue'
import router from './utils/router'

Vue.use(VueRouter)
Vue.use(VueAsyncProperties)

Vue.prototype.$http = axios

new Vue({
	router,
    el: '#app',
    render: h => h(App)
})
