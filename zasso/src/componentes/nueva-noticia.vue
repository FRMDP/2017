<template>
<div class="noticia">
  <div class="titulo">
    <h1 class="title" id="title">
       Redacción
     </h1>
  </div>
  <div class="contenedor">
    <div class="field is-horizontal">
      <div class="field-body">
        <div class="field is-narrow">
          <div class="control">
            <div class="select is-fullwidth">
              <select v-model="New.reporter">
              <option selected disabled value="">Seleccione reportero</option>
              <option v-for="repos in listarepos" :value="repos">{{ repos.name }}</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="field is-horizontal">
      <div class="field-body">
        <div class="field">
          <p class="control is-expanded has-icons-left">
            <input class="input-redaccion" type="text" placeholder="Aqui escriba titulo de la Noticia" v-model="New.title">
            <span class="icon is-small is-left">
            <i class="fa fa-user"></i>
          </span>
          </p>
        </div>
        <div class="field">
          <p class="control is-expanded has-icons-left has-icons-right">
            <input class="input-redaccion" type="text" placeholder="Aqui escriba subtitulo de la Noticia" v-model="New.subtitle">
            <span class="icon is-small is-left">
            <i class="fa fa-envelope"></i>
          </span>
            <span class="icon is-small is-right">
            <i class="fa fa-check"></i>
          </span>
          </p>
        </div>
      </div>
    </div>
    <div class="field is-horizontal">
      <div class="field-body">
        <div class="field">
          <div class="control">
            <textarea id="contenido" class="textarea-redaccion" placeholder="Aqui escriba el contenido de la Noticia" v-model="New.body"></textarea>
          </div>
        </div>
      </div>
    </div>
    <div class="field is-horizontal">
      <div class="field-body">
        <div class="field is-narrow">
          <div class="control">
            <div class="select is-fullwidth">
              <select v-model="New.category">
                      <option selected disabled value="">Seleccione Categoria</option>
                      <option v-for="cat in listacats" :value="cat">{{ cat.name }}</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button class="button" :disabled="!formOk" type="submit" @click.prevent="guardaNoticia">Subir Noticia</button>
    <div v-show="mensaje=='guardado'" class="modal">
      <div class="modal-content">
        <button class="delete" @click="cerrarMensaje"></button>
        <p>Noticia publicada</p>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import storageService from '../services/storageService';
export default {
  name: 'nuevaNoticia',
  data() {
    return {
      New: {
        id: '',
        title: '',
        subtitle: '',
        body: '',
        category: '',
        reporter: '',
        date: ''
      },
      mensaje: '',
      reporters: [],
      categories: []
    }
  },
  methods: {
    guardaNoticia() {
      const nowDate = new Date();
      this.New.date = nowDate.getFullYear() + '/' + (nowDate.getMonth() + 1) + '/' + nowDate.getDate();
      storageService.cargarNoticia(this.New);
      this.limpiarNoticia();
      this.mensaje = 'guardado';
    },
    cerrarMensaje() {
      this.mensaje = false;
    },
    limpiarNoticia() {
      this.New.title = '';
      this.New.subtitle = '';
      this.New.body = '';
      this.New.category = '';
      this.New.reporter = '';
    }
  },
  computed: {
    listarepos() {
      return this.reporters;
    },
    listacats() {
      return this.categories;
    },
    formOk() {
      return this.New.reporter && this.New.title && this.New.subtitle && this.New.body && this.New.category;
    }
  },
  mounted: function() {
    let repos = localStorage.getItem('reporters');
    if (repos != null) {
      this.reporters = JSON.parse(repos);
    }
    let cats = localStorage.getItem('categories');
    if (cats != null) {
      this.categories = JSON.parse(cats);
    }
  }
}
</script>
