<style scoped>



</style>

<template>

<div class="kode_wrapper">
    <div class="innner_banner">
        <div class="container">
            <h3>{{this.equipo}}</h3>
            <ul class="breadcrumb">
                <li class="active"><span>Jugadores</span></li>
                <li><a>Detalles</a></li>
            </ul>
        </div>
    </div>
    <div class="widget widget_player">
        <h6 class="kf_hd1">
                        <span>Fixture</span>
                    </h6>
        <div class="kf_border">
            <ul>
              <h3 v-if="!listaPartidos"><span>NO HAY PARTIDOS</span></h3>
              <h3 v-else-if="listaPartidos.length==0"><img src="../assets/futbol/loading_spinner.gif" style="width:42px;height:42px;"></h3>
              <li v-else v-for="p in listaPartidos">
                    <h5><span class="date_2">Fecha {{p.matchday}}-{{p.date.substring(0,10)}} <em> - </em>{{p.date.substring(11,16)}}</span></h5>
                    <div class="kf_opponents_wrap">
                        <div class="kf_opponents_dec">
                            <span><img :src="p.pich" alt=""></span>
                            <div class="text">
                                <h6><a  @click="iraEquipo(p._links.homeTeam.href.substr(p._links.homeTeam.href.lastIndexOf('/')))" style="cursor:pointer;">{{p.homeTeamName}} </a></h6>
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
    <div class="kf_overview kf_overview_roster">
        <h6 class="kf_hd1 margin_0">
          <span>Plantel</span>
      </h6>
        <ul class="kf_table2">
            <li class="table_head">
                <div class="tb2_nbr">
                    <span>Dorsal</span>
                </div>
                <div class="tb2_name">
                    <span>Nombre</span>
                </div>
                <div class="tb2_position">
                    <span>Posicion</span>
                </div>
                <div class="tb2_age">
                    <span>Edad</span>
                </div>
                <div class="tb2_height ">
                    <span>Nacionalidad </span>
                </div>
                <div class="tb2_weight">
                    <span>Contrato</span>
                </div>
                <div class="tb2_collage">
                    <span>Valor</span>
                </div>
            </li>
            <h3 v-if="!listaJugadores"><span>NO HAY JUGADORES</span></h3>
            <h3 v-else-if="listaJugadores.length==0"><img src="../assets/futbol/loading_spinner.gif" style="width:42px;height:42px;"></h3>
            <li v-else v-for="j in listaJugadores">
                <div class="tb2_nbr">
                    <span>{{j.jerseyNumber}}</span>
                </div>
                <div class="tb2_name">
                    <span>{{j.name}}</span>
                </div>
                <div class="tb2_position">
                    <span>{{j.position}}</span>
                </div>
                <div class="tb2_age">
                    <span>{{edad(j.dateOfBirth)}}</span>
                </div>
                <div class="tb2_height ">
                    <span>{{j.nationality}}</span>
                </div>
                <div class="tb2_weight">
                    <span>{{j.contractUntil}}</span>
                </div>
                <div class="tb2_collage">
                    <span v-if="j.marketValue">{{j.marketValue}}</span>
                    <span v-else>Sin Cotizacion</span>

                </div>
            </li>
        </ul>
    </div>

</div>

</template>

<script>

import storageService from '../services/storageService';
import moment from 'moment';
export default {
    name: 'Equipo',
    data() {
        return {
            equipo: '',
            jugadores: '',
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
            listaJugadores() {
                return this.jugadores.players;
            },
            listaPartidos() {
                return this.partidos;
            }

    },
    watch: {
        '$route.params.id': function() {
            this.verEquipo();
            this.verJugadores();
            this.verPartidos();
        }

    },
    methods: {
        verJugadores() {
                storageService.traerJugadores(this.id)
                    .then((response) => {
                        this.jugadores = response.data;
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            },
            edad(date) {
                moment.locale('es');
                return moment(date).fromNow(true);
            },
            verEquipo() {
                storageService.traerEquipo(this.id)
                    .then((response) => {
                        this.equipo = response.data.name;
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            },
            verPartidos() {
              let lista = [];
              storageService.traerPartidos(this.id)
              .then((response) => {
                  response.data.fixtures.forEach(elem => {
                      let partido = elem;
                      let pich = this.$store.getters.lista.find(e => e._links.self.href.substr(e._links.self.href.lastIndexOf('/') + 1) == partido._links.homeTeam.href.substr(partido._links.homeTeam.href.lastIndexOf('/') + 1));
                      let pica = this.$store.getters.lista.find(e => e._links.self.href.substr(e._links.self.href.lastIndexOf('/') + 1) == partido._links.awayTeam.href.substr(partido._links.awayTeam.href.lastIndexOf('/') + 1));
                      if (pich)
                      {
                        partido.pich = pich.crestUrl;
                      }
                      if (pica)
                      {
                        partido.pica = pica.crestUrl;
                      }
                      lista.push(partido);
                  })
                  this.partidos= lista;
              })
.catch((error) => {
  console.log(error);
});

            },
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
        this.verEquipo();
        this.verJugadores();
        this.verPartidos();
    }
}

</script>
