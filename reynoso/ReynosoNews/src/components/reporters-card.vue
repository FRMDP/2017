<template>
    <div class="container">
    <div class="pad">
        <md-card md-with-hover>
            <md-card-header>
                <div class="md-title">{{reporter.name}}</div>

                <div class="md-subhead" v-if="reporter.name=='Barack Obama'">Ex Presidente - Bailarin - Periodista</div>
                <div class="md-subhead" v-if="reporter.name=='Chuck Norris'">Si se queda sin munición en un tiroteo, recibe balazos
                    en el pecho y los utiliza para recargar su arma.</div>
                <div class="md-subhead" v-if="reporter.name=='Jane Doe'">Astronauta - Gatubela - Princesa</div>
                <div class="md-subhead" v-if="reporter.name=='John Doe'">Psicopata - Ladron - Periodista</div>

                <div class="md-title">visitas:{{visit[this.$route.path]}}</div>
            </md-card-header>

            <md-card-media>
                <img v-if="reporter.name=='Barack Obama'" src="img/obama.jpg" alt="People">
                <img v-if="reporter.name=='Chuck Norris'" src="img/chuck-norris.jpg" alt="People">
                <img v-if="reporter.name=='Jane Doe'" src="img/anne.jpg" alt="People">
                <img v-if="reporter.name=='John Doe'" src="img/joker.jpg" alt="People">
            </md-card-media>
        </md-card>
    </div>
    </div>
</template>

<script>
    import  io from 'socket.io-client'
    export default{
        name: 'reportersCard',
        data(){
            return{
                reporter:{},
                loading:false,
                visit: {}
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
                this.$socket.emit('addvisit',this.$route.path);
                this.httpGetReporter();
            }
        },
        created(){
            this.$socket.emit('addvisit',this.$route.path);
            this.$socket.on('getvisit',(data)=>this.visit=data);
            this.loading=true;
            this.httpGetReporter();
        }
    }
</script>

<style>
</style>