<template>
    <div class="container" v-if="article">
        <div class="row">
            <div class="mx-auto">
                <h1>{{ article.title.toUpperCase() }}</h1>
            </div>
        </div>
        <div class="row" >
            <div class="col-md-5">
            </div>
        </div>
        <div class="row">
            <div class="mx-auto">
                <p>{{ article.body}}</p>

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
                article: null
            }
        },
        created(){
           this.article = newsService.getNewById(this.$route.params.id);
        }
    }



</script>