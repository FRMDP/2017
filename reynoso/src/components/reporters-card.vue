<template>
    <div class="pad">
        <md-card md-with-hover>
            <md-card-header>
                <div class="md-title">{{reporter.name}}</div>
                <div class="md-subhead">Ex Presidente - Bailarin - Periodista</div>
            </md-card-header>

            <md-card-media>
                <img src="img/obama.jpg" alt="People">
            </md-card-media>
        </md-card>
    </div>
</template>

<script>
    export default{
        name: 'reportersCard',
        data(){
            return{
                reporter:{},
                loading:false,
            }
        },
        methods:{
          httpGetReporter(){
              this.$http('http://localhost:8080/reporters/'+this.id).then((response)=>this.reporter=response.data)
                  .catch((error)=>console.log(error))
              this.loading=false;
          }
        },
        computed: {
            params() {
                this.$route.params;
            },
            id() {
                return this.$route.params.id;
            }
        },
        watch: {
            '$route.params.id': function() {
                this.httpGetReporter();
            }
        },
        created(){
            this.loading=true;
            this.httpGetReporter();
        }
    }
</script>

<style>
</style>