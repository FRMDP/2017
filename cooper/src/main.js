import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './components/App.vue'
import serviceCategory from './services/serviceCategory'
import serviceNews from './services/serviceNews'
import serviceReporter from './services/serviceReporter'
import router from './utils/router'

Vue.use(VueRouter)
Vue.prototype.$serviceCategory = serviceCategory;
Vue.prototype.$serviceNews = serviceNews;
Vue.prototype.$serviceReporter = serviceReporter;

new Vue({
	router,
    el: '#app',
    render: h => h(App)
})
