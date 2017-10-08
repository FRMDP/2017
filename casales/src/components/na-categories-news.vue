<template>
    <div class="bg-categories-news">
        <div class="container is-fluid">
            <na-navigation class="drop-shadow" :logo="'dark'" :subtitle="getCategoryName"></na-navigation>
        </div>

        <div class="container">
            <section class="section">
                <div class="columns">
                    <div class="column is-8-desktop is-offset-2-desktop">
                        <na-articles :filter="getCategoryName"></na-articles>
                    </div>
                </div>
            </section>
        </div>

        <na-footer></na-footer>
    </div>
</template>

<script>
    import naNavigation from "./na-navigation.vue";
    import naFooter from "./na-footer.vue";
    import categoriesService from "./../services/categoriesService";
    import naArticles from "./na-articles.vue";

    export default {
        name: 'categoriesNews',
        components: {
            naNavigation: naNavigation,
            naFooter: naFooter,
            naArticles: naArticles
        },
        data() {
            return {
                category: {}
            }
        },
        computed: {
            params() {
                return this.$route.params;
            },
            id() {
                return this.$route.params.id;
            },
            getCategoryName() {
                return this.category.name;
            }
        },
        methods: {
            getCategory() {
                return categoriesService.getCategory(this.id);
            }
        },
        watch: {
            '$route.params.id': function () {
                this.category = this.getCategory();
            }
        },
        created() {
            this.category = this.getCategory();
        }
    }
</script>

<style src="../assets/css/na-categories-news.css">

</style>
