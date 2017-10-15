import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './components/App.vue'
import router from './utils/router'

import categoryStorageService from './services/categoryStorageService'
import reporterStorageService from './services/reporterStorageService'
import newStorageService from './services/newStorageService'

Vue.use(VueRouter);
Vue.prototype.$categoryStorageService = categoryStorageService;
Vue.prototype.$reporterStorageService = reporterStorageService;
Vue.prototype.$newStorageService = newStorageService;

new Vue({
	router,
    el: '#app',
    render: h => h(App)
})
