import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './components/App.vue'
import CategoryService from './services/CategoryService'
import ReporterService from './services/ReporterService'
import NewService from './services/NewService'
import router from './utils/router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

Vue.use(VueMaterial);
Vue.use(VueRouter);
Vue.prototype.$CategoryService = CategoryService;
Vue.prototype.$ReporterService = ReporterService;
Vue.prototype.$NewService = NewService;

new Vue({
	router,
    el: '#app',
    render: h => h(App)
})
