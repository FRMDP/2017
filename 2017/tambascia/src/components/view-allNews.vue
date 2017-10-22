<template>
    <div class="row" >
        <div class="col-md-4" v-for="actualNew in news">
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
        name: 'allNews',
        data(){
            return{
                news : []
            }

        },
        created() {
            this.news = newsService.getNews();
        }
    }
</script>
<style>
    .fontOfNews{
        font-family: 'Slabo 27px', serif;
    }
    .marginOfCars{
        margin-top:10px;
        margin-left: 10px;
        margin-bottom: 10px;
        margin-right: 10px;
    }

</style>