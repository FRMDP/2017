import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'

Vue.use(VueRouter);
Vue.use(VueMaterial);

import App from './components/App.vue'
import router from './utils/router'
import storageService from './services/storageService'

Vue.prototype.$storageService = storageService;

new Vue({
    router,
    el: '#app',
    render: h => h(App)
})