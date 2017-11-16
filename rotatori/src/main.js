import Vue from 'vue'
import VueMaterial from 'vue-material'
import VueSession from 'vue-session'
import axios from 'axios'
import VuePaginate from 'vue-paginate'
import store from './utils/store'
import router from './utils/router'

Vue.use(VuePaginate)
Vue.use(VueMaterial);
Vue.use(VueSession);

import App from './components/App.vue'
import apiRoutes from './utils/apiRoutes'

Vue.prototype.$http = axios
Vue.prototype.$apiRoutes = apiRoutes

new Vue({
    store,
    router,
    el: '#app',
    render: h => h(App)
})
