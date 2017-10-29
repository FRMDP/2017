import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './components/App.vue'
import router from './utils/router'

Vue.use(VueRouter);

new Vue({
	router,
    el: '#app',
    render: h => h(App)
})
