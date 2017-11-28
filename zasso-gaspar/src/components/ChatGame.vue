<template>
<div class="container">
  <li  v-if="this.partido">
    <span class="date_2">{{this.partido.date.substring(0,10)}} <em> - </em>{{this.partido.date.substring(11,16)}}</span>
    <div class="kf_opponents_wrap">
        <div class="kf_opponents_dec">
            <span><img :src="this.partido.pich" alt=""></span>
            <div class="text">
                <h6><a>{{this.partido.homeTeamName}}</a></h6>
            </div>
        </div>
        <div class="kf_opponents_gols">
            <h5><span>{{this.partido.result.goalsHomeTeam}}</span><span>-{{this.partido.result.goalsAwayTeam}}</span></h5>
            <p>
                <p v-if="this.partido.status === 'TIMED'">Sin jugar</p>
                <p v-else-if="this.partido.status === 'FINISHED'">Finalizado</p>
                <p v-else-if="this.partido.status === 'IN_PLAY'">En juego</p>
                <p v-else-if="this.partido.status === 'SCHEDULED'">Programado</p>
                <p v-else-if="this.partido.status === 'CANCELED'">Cancelado</p>
                <p v-else-if="this.partido.status === 'POSTPONED'">Pospuesto</p>
            </p>
        </div>
        <div class="kf_opponents_dec span_right">
            <span><img :src="this.partido.pica" alt=""></span>
            <div class="text">
                <h6><a>{{this.partido.awayTeamName}}</a></h6>
            </div>
        </div>
    </div>
</li>
  <div class="comment_wrap">
    <h6 class="kf_hd1"><span>Comentarios</span></h6>
    <ul class="comment_form" v-if="!listaComentarios">No hay comentarios</ul>
    <ul class="comment_form" v-if="listaComentarios.length==0">No hay comentarios</ul>
    <ul class="comment_form" v-else v-for="com in listaComentarios">
      <li>
        <div class="comment_dec">
          <figure><img src="../assets/futbol/person.png" alt=""></figure>
          <div class="text">
            <div class="comment_hd">
              <h5><a >{{com.usuario}}</a></h5>
              <ul>
                <i class="fa fa-clock-o"></i> {{tiempo(com.date)}} |
                <a style="cursor:pointer;" @click.prevent="meGusta(com.idc)" class="fa fa-heart-o"> {{com.mg}}</a>
              </ul>
            </div>
            <p>{{com.cuerpo}}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <div class="comment_input_wrap">
    <h6 class="kf_hd1"><span>Agregar comentario</span></h6>
    <form>
      <div class="input_textarea">
        <textarea placeholder="Tu comentario" v-model="comentario.cuerpo"></textarea>
      </div>
      <div class="input_dec">
        <input placeholder="Tu nombre" type="text" v-model="comentario.usuario">
      </div>
      <input class="input-btn" value="Enviar comentario" :disabled="!formOk" type="submit" @click.prevent="guardaComentario">
    </form>
  </div>
</div>
</template>
<script>
import storageService from '../services/storageService';
import moment from 'moment';
export default {
  name: 'ChatGame',
  data() {
    return {
      comentario: {
        usuario: '',
        cuerpo: '',
        id: '',
        date: '',
        mg: 0,
        idc:''
      },
      lista: [],
      socket: '',
      partido:''
      //idu: ''
    }
  },
  sockets: {
    connect: function() {
      console.log('socket connected');
      this.socket = this.$socket;
    },
    notiComentario: function(val) {
      this.cargaComentario(val);
      storageService.storeComentario(this.lista);
    },
    comentMegusta: function(val) {
        this.lista.find(c => c.idc == val).mg++;
        storageService.storeComentario(this.lista);
    }

  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    formOk() {
      return this.comentario.usuario && this.comentario.cuerpo;
    },
    listaComentarios() {
      return this.lista.filter(c => c.id == this.id);
      return this.lista;
    }

  },
  methods: {
    limpiarComentario() {
      this.comentario.usuario = '';
      this.comentario.cuerpo = '';
      this.comentario.id = '';
    },
    cargaComentario(comm) {
      comm.idc = this.lista.length;
      this.lista.push(Object.assign({}, comm));
    },
    guardaComentario() {
      this.comentario.id = this.id;
      this.comentario.date = new Date();
      this.$socket.emit('notiComentario', this.comentario);
      this.limpiarComentario();
    },
    tiempo(date) {
      moment.locale('es');
      return moment(date).fromNow();
    },
    meGusta(id) {
        this.$socket.emit('comentMegusta', id);
    },
    iraEquipo(id){
      this.$router.push('/equipos' + id);
    }

  },
  created() {
    this.lista = storageService.traerComentarios();
    this.partido = this.$store.getters.partidover;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
