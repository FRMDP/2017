import VueRouter from "vue-router";
import home from "../components/na-landing.vue";
import add from "../components/na-add.vue";
import news from "../components/na-news.vue";
import categories from "../components/na-categories.vue";

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
        },
        {
            path: '/categories',
            component: categories
        }
    ]
});
