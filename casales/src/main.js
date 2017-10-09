import Vue from "vue";
import VueRouter from "vue-router";
import Buefy from "buefy";
import "buefy/lib/buefy.css";
import moment from "moment";

import App from "./components/App.vue";
import storageService from "./services/storageService";
import router from "./utils/router";
import stringUtils from "./utils/stringUtils";

Vue.use(VueRouter);

Vue.use(Buefy, {
    defaultIconPack: 'fa'
});

Vue.filter('formatDate', function (value) {
    if (value) {
        return moment(value).format('MM/DD/YYYY')
    }
});

Vue.prototype.$storageService = storageService;
Vue.prototype.$stringUtils = stringUtils;

new Vue({
    router,
    el: '#app',
    render: h => h(App)
});
