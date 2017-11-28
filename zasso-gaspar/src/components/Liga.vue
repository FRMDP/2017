<template>
<div class="container">
  <div class="innner_banner">
    <div class="container">
      <h3>{{liga.caption}}</h3>
      <ul class="breadcrumb">
        <li class="active"><span>TEMPORADA</span></li>
        <li><a>{{liga.year}}</a></li>
      </ul>
    </div>
  </div>
  <div class="col-md-4">
    <div class="kode_content_wrap">
      <section class="roster_page">
          <h6 class="kf_hd1 margin_0"><span>EQUIPOS</span></h6>
            <div>
              <div class="kf_overview kf_overview_schedule">
        <ul class="kf_table2">
            <li v-for="com, index  in listaEquipos">
                <div class="versus">
                    <div>
                        <span><img :src="com.crestUrl" style="width:42px;height:42px;" alt=""></span>
                        <p>
                            <a  @click="verEquipo(com._links.self.href.substr(com._links.self.href.lastIndexOf('/')))" style="cursor:pointer;" >{{com.name}}</a>
                            <span>{{com.shortName}}</span>
                        </p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    </div>
    </section>
    </div>
   </div>
  <div class="col-md-8">
    <div class="kode_content_wrap">
      <section class="latst_result_page">
        <div>
          <div class="kf_overview_contant">
            <h6 class="kf_hd1 margin_0">
                            <span>POSICIONES</span>
                        </h6>
            <ul class="kf_table2 kf_table4 table-center">
              <li class="table_head">
                <div class="tb2_posicion">
                  <span>Posición</span>
                </div>
                <div class="tb2_equipo">
                  <span>Equipo</span>
                </div>
                <div class="tb2_pts">
                  <span>Pts</span>
                </div>
                <div class="tb2_pj">
                  <span>PJ</span>
                </div>
                <div class="tb2_pg">
                  <span>PG</span>
                </div>
                <div class="tb2_pe">
                  <span>PE</span>
                </div>
                <div class="tb2_pp">
                  <span>PP</span>
                </div>
                <div class="tb2_gf">
                  <span>GF</span>
                </div>
                <div class="tb2_gc">
                  <span>GC</span>
                </div>
                <div class="tb2_dif">
                  <span>DIF</span>
                </div>
              </li>
              <li v-for="pos in listaPosiciones">
                <div class="tb2_posicion">
                  <a>{{pos.position}}</a>
                </div>
                <div class="tb2_equipo">
                  <a>{{pos.teamName}}</a>
                </div>
                <div class="tb2_pts">
                  <a>{{pos.points}}</a>
                </div>
                <div class="tb2_pj">
                  <a>{{pos.playedGames}}</a>
                </div>
                <div class="tb2_pg">
                  <a>{{pos.wins}}</a>
                </div>
                <div class="tb2_pe">
                  <a>{{pos.draws}}</a>
                </div>
                <div class="tb2_pp">
                  <a>{{pos.losses}}</a>
                </div>
                <div class="tb2_gf">
                  <a>{{pos.goals}}</a>
                </div>
                <div class="tb2_gc">
                  <a>{{pos.goalsAgainst}}</a>
                </div>
                <div class="tb2_dif">
                  <a>{{pos.goalDifference}}</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>

</div>
<div class="col-md-8">
    <div class="kode_content_wrap">
      <section class="latst_result_page">
        <div>
          <div class="kf_overview_contant">
            <h6 class="kf_hd1 margin_0"><span>FECHA {{this.match}}</span></h6>
            <div class="kode-pagination margin_0">
              <a @click="seleccion_fecha(n),descripcion_fecha()" class="page-numbers" style="cursor:pointer;" v-for="n in this.liga.numberOfMatchdays">{{ n }}</a>
            </div>
            <ul class="kf_table2 kf_table4 table-center">
              <li class="table_head">
                <div class="tb2_dia">
                  <span>Día / Hora</span>
                </div>
                <div class="tb2_estado">
                  <span>Local</span>
                </div>
                <div class="tb2_local">
                  <span>Resultado</span>
                </div>
                <div class="tb2_resultado">
                  <span>Visitante</span>
                </div>
                <div class="tb2_visitante">
                  <span>Estado</span>
                </div>
              </li>
              <li v-for="game in listaMatchday">
                <div class="tb2_dia">
                  <a>{{game.date.substring(0,10)}} / {{game.date.substring(11,16)}}</a>
                </div>
                <div class="tb2_local">
                  <a>{{game.homeTeamName}}</a>
                </div>
                <div class="tb2_resultado">
                  <a>{{game.result.goalsHomeTeam}}  || {{game.result.goalsAwayTeam}}</a>
                </div>
                <div class="tb2_visitante">
                  <a>{{game.awayTeamName}}</a>
                </div>
                <div>
                  <div class="tb2_estado" v-if="game.status === 'TIMED'"><a>Sin jugar</a></div>
                  <div class="tb2_estado" v-else-if="game.status === 'FINISHED'"><a>Finalizado</a></div>
                  <div class="tb2_estado" v-else-if="game.status === 'IN_PLAY'"><a>En juego</a></div>
                  <div class="tb2_estado" v-else-if="game.status === 'SCHEDULED'"><a>Programado</a></div>
                  <div class="tb2_estado" v-else-if="game.status === 'CANCELED'"><a>Cancelado</a></div>
                  <div class="tb2_estado" v-else-if="game.status === 'POSTPONED'"><a>Pospuesto</a></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
</div>
</template>
<script>
import storageService from '../services/storageService';
export default {
  name: 'Liga',
  data() {
    return {
      liga: '',
      posicion: '',
      lista_matchday: '',
      match: '',
      fixture: '',
      filtro: '',
      equipos:[0,1,2,3,4,5]
    }
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    listaPosiciones() {
      return this.posicion.standing;
    },
    listaMatchday() {
      return this.lista_matchday.fixtures;
    },
    listaEquipos(){
      return this.equipos;
    },
    muestraLiga(){
      return this.liga;
    }
  },
  watch: {
    '$route.params.id': function() {
      this.verEquipos();
      this.verPosicion();
      this.verLiga();
    },
    filtro: function() {
      this.partidosXfecha(this.filtro);
    }
  },
  methods: {
    verLiga() {
      storageService.traerLigas(this.id).then((response) => {
          this.liga = response.data;
        })
        .catch((error) => {
          console.log(error);
          this.liga = '';
        })
    },
    verEquipos() {

        storageService.traerEquipos(this.id)
        .then((response) => {

            this.equipos = response.data.teams;
        })
        .catch((error) => {
            console.log(error);
        });
    },
    verPosicion() {
      storageService.traerPosiciones(this.id).then((response) => {
          this.posicion = response.data;
          this.match = response.data.matchday;
          this.partidosXfecha(this.match);
        })
        .catch((error) => {
          console.log(error);
          this.posicion = '';
        })
    },
    verFixture() {
      storageService.traerFixture(this.id).then((response) => {
          this.fixture = response.data;
        })
        .catch((error) => {
          console.log(error);
          this.fixture = '';
        })
    },
    partidosXfecha(dia) {
      storageService.traerMatchDay(this.id, dia).then((response) => {
          this.lista_matchday = response.data;
        })
        .catch((error) => {
          console.log(error);
          this.lista_matchday = '';
        })
    },
    seleccion_fecha(id) {
      this.filtro = id;
    },
    descripcion_fecha()
    {
      this.match = this.filtro;
    },
    verEquipo(id){
      this.$router.push('/equipos' + id);
    }
  },
  created() {
    this.verLiga();
    this.verEquipos();
    this.verPosicion();
    this.verFixture();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
