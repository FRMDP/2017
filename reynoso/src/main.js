import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './components/App.vue'
import router from './utils/router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import Axios from 'axios'

Vue.use(VueMaterial);
Vue.use(VueRouter);
Vue.prototype.$http = Axios;

new Vue({
	router,
    el: '#app',
    render: h => h(App)
})
