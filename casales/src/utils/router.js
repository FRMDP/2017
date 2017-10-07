import VueRouter from "vue-router";
import home from "../components/na-landing.vue";

export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: home
        }
    ]
});
