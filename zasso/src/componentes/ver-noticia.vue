<style>
</style>
<template>
<div class="noticia">
  <div v-if="!Noticia" class="box">
    <h3>La noticia no existe</h3>
  </div>
  <div class="box">
    <div class="post-header has-text-centered">
      <img src="">
      <h4 class="title is-8"><i>{{Noticia.getTitle()}}</i></h4>
    </div>
    <hr>
    <div class="post-content-short">
      <p>{{Noticia.getBody()}}</p>
      <div class="post-content-details">
      </div>
    </div>
  </div>
  <div class="box content">
    <div class="post-header has-text-centered">
      <h4 class="title is-8"><i>Comentarios</i></h4>
    </div>
    <article class="media" v-for="com in listaComentarios">
      <div class="media-content">
        <div class="content">
          <p>
            <strong>{{com.usuario}}</strong>
            <br>{{com.cuerpo}}
            <br>
          </p>
        </div>
      </div>
    </article>
    <article id="comment1" class="media">
      <div id="comment2" class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Nombre</label>
        </div>
        <div class="field-body">
          <div class="field">
            <p class="control is-expanded has-icons-left">
              <input class="input" type="text" placeholder="Ingrese su nombre..." v-model="comentario.usuario">
              <span class="icon is-small is-left">
        <i class="fa fa-user"></i>
      </span>
            </p>
          </div>
        </div>
      </div>
      <div class="media-content">
        <div class="field">
          <p class="control">
            <textarea class="textarea" placeholder="Agregar comentario..." v-model="comentario.cuerpo"></textarea>
          </p>
        </div>
        <div class="field">
          <p class="control">
            <button class="button" :disabled="!formOk" type="submit" @click.prevent="guardaComentario">Enviar Comentario</button>
          </p>
        </div>
      </div>
    </article>
  </div>
</div>
</template>
<script>
import storageService from '../services/storageService';
import objNoticia from '../utils/objNoticia';
export default {
  name: 'verNoticia',
  data() {
    return {
      Noticia: '',
      comentario: {
        usuario: '',
        cuerpo: '',
        id: '',
        date: '',
        mg: 0
      },
      lista: [],
      socket: '',
      idu: ''
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
    }
  },
  methods: {
    verNoticia() {
      storageService.traerNoticia('http://localhost:8080/news/' + this.id)
        .then((response) => {
          this.Noticia.setTitle(response.data.title);
          this.Noticia.setBody(response.data.body);
          this.Noticia.setDate(response.data.date.substr(0, 10));
          this.Noticia.setUid(response.data.uid);
          this.Noticia.setReporter(response.data._links.reporter.href);
          this.Noticia.setCategory(response.data._links.category.href);
          this.idu = this.Noticia.getUid();
          const promesa1 = storageService.traerReportero(this.Noticia.getReporter());
          const promesa2 = storageService.traerCategoria(this.Noticia.getCategory());
          Promise.all([promesa1, promesa2])
            .then((values) => {
              this.reporter = values[0].data.name;
              this.category = values[1].data.name;
            })
            .catch((values) => console.log(values));
        })
        .catch((error) => {
          console.log(error);
          this.Noticia = '';
          this.idu = '';
        })
    },
    verCategoria(id) {
      this.$router.push('/category/' + id);
    },
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
      this.comentario.id = this.idu;
      this.comentario.date = new Date();
      this.$socket.emit('notiComentario', this.comentario);
      this.limpiarComentario();
    },
    tiempo(date) {
      return moment(date).startOf('hour').fromNow();
    }
  },
  computed: {
    params() {
      return this.$route.params;
    },
    id() {
      return this.$route.params.id;
    },
    formOk() {
      return this.comentario.usuario && this.comentario.cuerpo;
    },
    listaComentarios() {
      return this.lista.filter(c => c.id == this.idu);
    }
  },
  watch: {
    '$route.params.id': function() {
      this.Noticia = objNoticia.Noticia();
      this.verNoticia();
    }
  },
  created() {
    this.Noticia = objNoticia.Noticia();
    this.verNoticia();
    this.lista = storageService.traerComentarios();
  }
}
</script>
