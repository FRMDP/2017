import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'

import App from './components/App.vue'
import categoriesService from './services/categoriesService'
import reportersService from './services/reportersService'
import newsService from './services/newsService'
import router from './utils/router'

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.prototype.$categoriesService = categoriesService;
Vue.prototype.$reportersService = reportersService;
Vue.prototype.$newsService = newsService;

new Vue({
	router,
    el: '#app',
    render: h => h(App)
})
