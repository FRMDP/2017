<template>
    <div class="container" v-model="news">
        <div class="row">
            <div class="mx-auto">
                <h1>{{ news.title.toUpperCase() }}</h1>
                <h5>{{ news.reporter.name.toUpperCase() }} </h5>
            </div>
        </div>
        <div class="row" >
            <div class="col-md-5">
                <h6>{{ news.category.name.toUpperCase() }} </h6>
            </div>
        </div>
        <div class="row">
            <div class="mx-auto">
                <p>{{ news.body}}</p>

            </div>
        </div>


    </div>


</template>
<script>
    import newsService from '../services/newsService';
    export default {
        name: 'oneNew',

        data() {
            return {
                news: {}
            }
        },
        created(){
            this.news = newsService.getNewById(this.$route.params.id);
        }
    }



</script>