<template>
    <div class="container">
        <div class="row">
            <div class="col s12 m6 l4" v-for="oneNew in news">
                <div class="card large hoverable">
                    <div class="card-image">
                        <img src="https://picsum.photos/200/300/?random">
                        <span class="card-title">{{ oneNew.title }}</span>
                    </div>
                    <div class="card-content">
                        <p class="truncate">
                            {{ oneNew.body }}
                        </p>
                    </div>
                    <div class="card-action">
                        <router-link v-bind:to="'/oneNew/' + oneNew.id">
                            <p>Mas informacion</p>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import newsService from '../services/newsService.js';

    export default {
        name: 'fmNewsByCategory',
        data() {
            return {
                news: []
            }
        },
        computed: {
            id() {
                return this.$route.params.id;
            }
        },
        methods: {
            getNews() {
                return newsService.getNewsByCategory(this.id);
            }
        },
        watch: {
            '$route.params.id': function() {
                this.news = this.getNews(this.id);
            }
        },
        created() {
            this.news = this.getNews(this.id);
        }
    }
</script>

<style>

</style>