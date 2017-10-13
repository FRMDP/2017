<template>
    <div class="container">
        <div class="row" v-for="oneNew in news">
            <div class="col s12 m6 l4">
                <div class="card">
                    <div class="card-image">
                        <img src="">
                        <span class="card-title">{{ oneNew.title }}</span>
                    </div>
                    <div class="card-content">
                        <p>{{ oneNew.body }}</p>
                    </div>
                    <div class="card-action">
                        <router-link to="{name: 'oneNew'. params: {id: oneNew.id}}">
                            <p>Mas informacion acerca de esta noticia</p>
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
        name: 'fmNew',
        data() {
            return {
                news: []
            }
        },
        methods: {
            getNews(){
                return newsService.getNews(this.id);
            }
        },
        computed: {
            id(){
                return this.$route.params.id;
            }
        },
        watch: {
            '$route.params.id': function() {
                this.news = this.getNews(this.id)
            }
        },
        created() {
            this.news = this.getNews(this.id);
        }
    }
</script>

<style>

</style>