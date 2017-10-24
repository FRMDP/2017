<template>
    <div class="container" v-model="news">
        <div class="row">
            <div class="mx-auto">
                <h1>{{ news[0].title.toUpperCase() }}</h1>
            </div>
        </div>
        <div class="row" >
            <div class="col-md-5">
            </div>
        </div>
        <div class="row">
            <div class="mx-auto">
                <p>{{ news[0].body}}</p>

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
                news: {},
            }
        },
        created(){
            newsService.updateNews();
            this.news = newsService.getNewById(this.$route.params.id);
        }
    }



</script>