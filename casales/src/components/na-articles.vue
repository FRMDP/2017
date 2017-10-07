<template>
    <div>
        <div v-if="!paginatedArticles.length">
            <p class="title is-1 custom-info animated zoomIn">Couldn't find anything !</p>
            <a href="/#/categories"><p class="custom-info-sub animated fadeIn">Go to categories?</p></a>
        </div>
        <div v-if="paginatedArticles.length">
            <na-articles-item v-for="(article, index) in paginatedArticles" :data="article"
                              :key="article.id" :article="article" :wrappedText="true"></na-articles-item>
            <section>
                <p class="has-text-light">
                    <strong class="has-text-light">
                        Showing {{ paginate().length }} of {{ filteredArticles().length }}
                    </strong> | {{ perPage }} per page.
                </p>
                <hr>
                <b-pagination
                        :total="total"
                        :current.sync="current"
                        :order="order"
                        :size="size"
                        :simple="isSimple"
                        :per-page="perPage"
                        @change="paginate">
                </b-pagination>
            </section>
        </div>
    </div>
</template>

<script>
    import articlesService from "./../services/articlesService";
    import naArticlesItem from "./na-articles-item.vue";

    export default {
        name: 'naArticles',
        props: ['filter'],
        components: {
            naArticlesItem: naArticlesItem
        },
        data() {
            return {
                articles: [],
                total: '',
                current: 1,
                perPage: 5,
                order: 'is-centered',
                size: 'default',
                isSimple: false
            }
        },
        computed: {
            paginatedArticles() {
                return this.paginate();
            }
        },
        methods: {
            filteredArticles() {
                return this.articles.filter(a => a.category.name.indexOf(this.filter) >= 0);
            },
            filteredTotal() {
                this.total = this.filteredArticles().length;
            },
            paginate() {
                let array = this.filteredArticles();
                let page_size = this.perPage;
                let page_number = this.current;
                --page_number; // because pages logically start with 1, but technically with 0
                return array.slice(page_number * page_size, (page_number + 1) * page_size);
            }
        },
        created() {
            this.articles = articlesService.getArticles();
            this.filteredTotal();
        }
    }
</script>

<style src="../assets/css/na-article.css">

</style>
