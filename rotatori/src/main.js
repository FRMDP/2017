import Vue from 'vue'
import VueRouter from 'vue-router'
import vueMaterrial from 'vue-material'

import App from './components/App.vue'
import router from './utils/router'
import storageService from './services/storageService'

Vue.use(VueRouter);
Vue.use(VueMaterial)
Vue.prototype.$storageService = storageService;

new Vue({
    router,
    vueMaterrial,
    el: '#app',
    render: h => h(App)
})
