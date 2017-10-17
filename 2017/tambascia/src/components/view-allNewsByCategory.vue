<template>
    <div class="row" >
        <div class="col-md-4" v-for="actualNew in categoryNews">
            <div class="card marginOfCars text-center">
                <div class="card-body" >
                    <h4 class="card-title" >{{ actualNew.title.toUpperCase() }}</h4>
                    <h6 class="card-subtitle mb-2 text-muted">{{ actualNew.category.name }}</h6>
                    <p class="card-text fontOfNews">{{ actualNew.body.substring(0,100) }}</p>
                    <a :href="'/#/new/' + actualNew.id" class="card-link">Ver mas</a>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import newsService from '../services/newsService';
    export default {
        name: 'allNewsByCategory',

        data() {
            return {
                categoryNews: []
            }
        },
        methods: {
            getCategoryNews() {
                return newsService.getNewByCategory(this.id);
            }
        },
        computed: {
            id() {
                return this.$route.params.id;
            }
        },
        watch: {
            '$route.params.id': function() {
                this.categoryNews = this.getCategoryNews(this.id);
            }
        },
        created() {
            this.categoryNews = this.getCategoryNews(this.id);
        }
    }

</script>