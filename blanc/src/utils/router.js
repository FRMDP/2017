import VueRouter from "vue-router";
import home from "../components/sb-home.vue";
import add from "../components/sb-add-article.vue";
import news from "../components/sb-news.vue";
import categories from "../components/sb-categories.vue";
import newsByCategory from "../components/sb-news-by-category.vue";
import newsById from "../components/sb-news-by-id.vue";
import notFound from "../components/sb-not-found.vue";

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
            path: '/news/:uid',
            component: newsById
        },
        {
            path: '/categories',
            component: categories
        },
        {
            path: '/categories/:uid',
            component: newsByCategory
        }
    ]
});
