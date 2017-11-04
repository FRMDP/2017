import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './components/App.vue'
import router from './utils/router'

Vue.use(VueRouter);
Vue.use(BootstrapVue);

Vue.prototype.$http = axios;

new Vue({
	router,
    el: '#app',
    render: h => h(App)
})
