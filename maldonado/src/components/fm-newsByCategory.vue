<template>
    <div class="container">
        <div class="row">
            <div class="col s12 m12 l12" v-if="!news.length">
                <h4 class="center-align noNews">No hay noticias en esta categoria aun</h4>
            </div>
            <div class="col s12 m6 l4" v-for="oneNew in news">
                <div class="card large hoverable">
                    <div class="card-image">
                        <img src="https://picsum.photos/200/300/?random">
                        <span class="card-title"><strong>{{ oneNew.title }}</strong></span>
                    </div>
                    <div class="card-content">
                        <p class="truncate">
                            {{ oneNew.body }}
                        </p>
                    </div>
                    <div class="card-action">
                        <router-link to="/oneNew"> 
                            <p @click="setNews(oneNew)">Mas informacion</p>
                        </router-link>
                        <p class="right-align">{{ oneNew.date }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'fmNewsByCategory',
        data() {
            return {
                news: [],
                categoriesFromAPI: [],
                newsByCat: []
            }
        },
        computed: {
            id() {
                return this.$route.params.id;
            }
        },
        methods: {
            getNews() {
                this.newsByCat = this.categoriesFromAPI.filter(category => category.uid == this.id);
                let categoriesHref = this.newsByCat[0]._links.news.href;
                this.$http.get(categoriesHref)
                     .then((response) => {
                        this.news = response.data._embedded.news;
                     })
                     .catch((error) => {
                        console.log(error);
                     }) 
            },
            setNews(oneNew) {
                this.$emit('setNews', oneNew)
            }
        },
        watch: {
            '$route.params.id': function() {
                this.getNews();
            }
        },
        created() {
            this.$http.get('http://192.168.99.100:8080/categories')
                .then((response) => {
                    this.categoriesFromAPI = response.data._embedded.categories;
                    this.getNews();
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    }
</script>

<style>
    .noNews {
        margin-top: 200px;
        margin-bottom: 100px;
    }
</style>