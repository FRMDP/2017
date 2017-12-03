<style>
</style>
<template>
<div class="todas">
  <div class="navbar-item-categorias">
    <p class="title is-2" id="title-categorias">Categorias</p>
    <div class="field is-grouped">
        <a class="button-category"v-for="cat in categorias" :class="{'navbar-item-a-elegido': category == cat.uid}"  @click="navegar(cat.uid)">{{cat.name}}</a>
    </div>
  </div>
  <div width="auto" class="grid-wrapper" id="contenedor">
    <div class="grid-item" id="noticia" v-if="!listaNoticias.length">
        <p class="title is-4" id="titulo">No se han cargado noticias</p>
    </div>
    <div class="grid-item" id="noticia" v-else v-for="noticia in listaNoticias">
      <div class="card">
        <div class="card-content">
          <div class="content">
            <p class="title is-3">{{noticia.title}}</p>
          </div>
          <div class="media">
            <img src="css/news.jpg">
          </div>
          <div class="botones">
            <button class="button" @click="verNoticia(noticia._links.self.href.substr(noticia._links.self.href.lastIndexOf('/')+1))">Seguir leyendo...</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import storageService from '../services/storageService';
export default {
  name: 'todasNoticias',
  data() {
    return {
      category: '',
      noticias: '',
      categorias: ''
    }
  },
  methods: {
    navegar(cat){
      this.category = cat;
      let id = '';
      switch(cat){
        case '37376533-3139-3137-2d63-3133382d3437':
        id = 1;
        break;
        case '61343035-3332-6566-2d39-3436342d3463':
        id = 2;
        break;
        case '66393333-6335-3936-2d31-6631342d3435':
        id = 3;
        break;
        case '66313936-6436-3366-2d33-6561612d3434':
        id = 4;
        break;
        case '36356563-3665-3734-2d33-3732322d3436':
        id = 5;
        break;
        case '30386666-6236-6634-2d37-6565382d3438':
        id = 6;
        break;
      }
      if(id)
      {
          this.$router.push('/category/' + id);
      }
      else{
          switch(cat){
            case '0':
            this.$router.push('/news/');
            break;
            case '-1':
            this.$router.push('/addnew');
            break;
      }
    }
  },
    notixCategoria(cat) {
            const link = this.categorias[cat - 1]._links.news.href;
            storageService.noticiasCategoria(link)
                .then((response) => {
                    this.noticias = response.data._embedded.news;
                })
        },
        verNoticia(id) {
            this.$router.push('/news/' + id);
        }
  },
  computed: {
    params() {
            return this.$route.params;
        },
        id() {
            return this.$route.params.cat;
        },
        listaNoticias() {
            return this.noticias;
        },
        listaCategorias() {
            return this.categorias;
        }
  },
  watch: {
    '$route.params.cat': function() {
        if (this.id) {
            this.notixCategoria(this.id);
        } else {
            storageService.traerNoticias()
                .then((response) => {
                    this.noticias = response.data._embedded.news;
                });
        }
    }
  },
  created() {
    storageService.traerCategorias()
        .then((response) => {
            this.categorias = response.data._embedded.categories;
            if (this.id) {
                this.notixCategoria(this.id);
              }
        });
          storageService.traerNoticias()
              .then((response) => {
                  this.noticias = response.data._embedded.news;
              });
      }
  }
</script>

<style>

</style>
