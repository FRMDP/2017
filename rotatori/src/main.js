import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'
import VueSession from 'vue-session'
import axios from 'axios'
import VuePaginate from 'vue-paginate'

Vue.use(VuePaginate)
Vue.use(VueRouter);
Vue.use(VueMaterial);
Vue.use(VueSession);

import App from './components/App.vue'
import router from './utils/router'
import apiRoutes from './utils/apiRoutes'

Vue.prototype.$http = axios
Vue.prototype.$apiRoutes = apiRoutes

new Vue({
    router,
    el: '#app',
    render: h => h(App)
})
