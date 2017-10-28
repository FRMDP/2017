import VueRouter from "vue-router";

// Components.
import notFound from "./../components/na-not-found.vue";
import home from "./../components/na-landing.vue";
import add from "./../components/na-add.vue";
import news from "./../components/na-news.vue";

export default new VueRouter({
    routes: [
        {
            path: '*',
            redirect: '/notFound'
        },
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/notFound',
            component: notFound
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
