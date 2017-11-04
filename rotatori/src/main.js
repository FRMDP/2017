import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'
import axios from 'axios'

Vue.use(VueRouter);
Vue.use(VueMaterial);

import App from './components/App.vue'
import router from './utils/router'

Vue.prototype.$http = axios

new Vue({
    router,
    el: '#app',
    render: h => h(App)
})
