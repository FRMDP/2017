import VueRouter from "vue-router";
import home from "../components/na-landing.vue";
import add from "../components/na-add.vue";
import news from "../components/na-news.vue";
import categories from "../components/na-categories.vue";
import categoriesNews from "../components/na-categories-news.vue";
import article from "../components/na-article.vue";
import notFound from "../components/na-not-found.vue";

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
        },
        {
            path: '/news/:id',
            component: article
        },
        {
            path: '/categories',
            component: categories
        },
        {
            path: '/categories/:id',
            component: categoriesNews
        }
    ]
});
