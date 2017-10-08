import VueRouter from "vue-router";
import home from "../components/na-landing.vue";
import add from "../components/na-add.vue";
import news from "../components/na-news.vue";

export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: home
        },
        {
            path: '/add',
            component: add
        },
        {
            path: '/news',
            component: news
        }
    ]
});
