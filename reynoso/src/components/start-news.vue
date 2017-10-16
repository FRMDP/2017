<template>
    <div v-if="News">
        <div v-for="New in News">
            <md-card>
                <md-card-media>
                    <img src="img/imagen.png" alt="People">
                </md-card-media>

                <md-card-header>
                    <div class="md-title">{{New.title}}</div>
                </md-card-header>

                <md-card-actions>
                    <md-button >Action {{New.id}}</md-button>
                </md-card-actions>

                <md-card-content>
                  {{New.body}}
                </md-card-content>
            </md-card>
        </div>
    </div>
    <div v-else>No hay noticias</div>
</template>

<script>
    export default{
        name:'startNews',
        data(){
            return{
                News:[],

            }
        },
        mounted(){
          this.News=this.$NewService.getNews();
          console.log(this.News);
        },
    }
</script>

<style>
</style>