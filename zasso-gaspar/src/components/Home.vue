<template>
<div class="kode_wrapper">
    <div class="innner_banner">
        <div class="container">
            <h3>Ligas del Mundo</h3>
            <ul class="breadcrumb">
                <li class="active"><span>Equipos</span></li>
                <li><a>Fixtures</a></li>
            </ul>
        </div>
    </div>
    <div class="widget widget_player">
        <h6 class="kf_hd1">
                        <span>Partidos del Dia</span>
                    </h6>
        <div class="kf_border">
            <ul>
                  <h3 v-if="!listaPartidos"><span>NO HAY PARTIDOS</span></h3>
                  <h3 v-else-if="listaPartidos.length==0"><img src="../assets/futbol/loading_spinner.gif" style="width:42px;height:42px;"></h3>
                  <li v-else v-for="p in listaPartidos">
                    <span class="date_2">{{p.date.substring(0,10)}} <em> - </em>{{p.date.substring(11,16)}}</span>
                    <div class="kf_opponents_wrap">
                        <div class="kf_opponents_dec">
                            <span><img :src="p.pich" alt=""></span>
                            <div class="text">
                                <h6><a  @click="iraEquipo(p._links.homeTeam.href.substr(p._links.homeTeam.href.lastIndexOf('/')))" style="cursor:pointer;">{{p.homeTeamName}}</a></h6>
                            </div>
                        </div>
                        <div class="kf_opponents_gols">
                            <h5 @click="verPartido(p), iraPartido(p)" style="cursor:pointer;"><span>{{p.result.goalsHomeTeam}}</span><span>-{{p.result.goalsAwayTeam}}</span></h5>
                            <p>
                                <p v-if="p.status === 'TIMED'">Sin jugar</p>
                                <p v-else-if="p.status === 'FINISHED'">Finalizado</p>
                                <p v-else-if="p.status === 'IN_PLAY'">En juego</p>
                                <p v-else-if="p.status === 'SCHEDULED'">Programado</p>
                                <p v-else-if="p.status === 'CANCELED'">Cancelado</p>
                                <p v-else-if="p.status === 'POSTPONED'">Pospuesto</p>
                            </p>
                        </div>
                        <div class="kf_opponents_dec span_right">
                            <span><img :src="p.pica" alt=""></span>
                            <div class="text">
                                <h6><a @click="iraEquipo(p._links.awayTeam.href.substr(p._links.awayTeam.href.lastIndexOf('/')))" style="cursor:pointer;">{{p.awayTeamName}}</a></h6>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>

</template>

<script>

import storageService from '../services/storageService';
export default {
    name: 'Home',
    data() {
        return {
            partidos: []
        }
    },
    computed: {
        contador() {
                return this.$store.state.counter;
            },
            doble() {
                return this.$store.getters.twice;
            },
            id() {
                return this.$route.params.id;
            },
            listaPartidos() {
                return this.partidos;
            }
    },
    watch: {
        '$route.params.id': function() {
          if(this.$store){
           this.partidos = this.$store.state.partidosDia;
          }
        },
        $store: function() {
          if(this.$store){
           this.partidos = this.$store.state.partidosDia;
          }
        }
    },
    methods: {
            iraEquipo(id){
              this.$router.push('/equipos' + id);
            },
            verPartido(partido){
              this.$store.commit('partidoVisto', partido);
            },
            iraPartido(p){
              this.$router.push('/chatgame/' + this.idConstructor(p._links.awayTeam.href)+ this.idConstructor(p._links.homeTeam.href)+ this.idConstructor(p._links.competition.href) + p.matchday);
            },
            idConstructor(url){
              return url.substr(url.lastIndexOf('/')+1);
            }
            },
    created() {
       if(this.$store){
         this.partidos = this.$store.state.partidosDia;
       }

    }
}

</script>
