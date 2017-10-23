<template>
    <div>
        <div v-if="!articles.length">
            <p class="title is-1 custom-info animated zoomIn">Couldn't find anything !</p>
            <p class="custom-info-sub animated fadeIn">Pick another category</p>
        </div>
        <div v-if="articles.length">
            <na-articles-item v-for="(article, index) in articles" :data="article" :key="article.uid" :article="article"
                              :wrappedText="wrappedText" @displayArticle="displayArticle"
                              @displayCategory="displayCategory"></na-articles-item>
            <!--<section>
                <p class="has-text-light">
                    <strong class="has-text-light">
                        Showing {{ }} of {{ }}
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
                        @change="true">
                </b-pagination>
            </section>-->
        </div>
    </div>
</template>

<script>
    // Components
    import naArticlesItem from "./na-articles-item.vue";

    export default {
        name: 'naArticles',
        props: ['articles', 'wrappedText'],
        components: {
            naArticlesItem: naArticlesItem
        },
        data() {
            return {
                total: '',
                current: 1,
                perPage: 5,
                order: 'is-centered',
                size: 'default',
                isSimple: false
            }
        },
        methods: {
            displayArticle(url) {
                this.$emit('displayArticle', url);
            },
            displayCategory(url, name) {
                this.$emit('displayCategory', url, name);
            }
        }
    }
</script>

<style src="../assets/css/na-article.css">

</style>
