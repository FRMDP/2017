<template>
<div class="todas">
  <div class="navbar-item-categorias">
    <p class="title is-2" id="title-categorias">Categorias</p>
    <div class="field is-grouped">
      <p class="control">
        <router-link class="button-category" to="/category/:cat" @click="noticiasCategoria(1)">
        <span>sports</span>
      </router-link>
      </p>
      <p class="control">
        <a class="button-category">
        <span>local</span>
      </a>
      </p>
      <p class="control">
        <a class="button-category">
        <span>world</span>
      </a>
      </p>
      <p class="control">
        <a class="button-category">
        <span>economy</span>
      </a>
      </p>
      <p class="control">
        <a class="button-category">
        <span>politics</span>
      </a>
      </p>
      <p class="control">
        <a class="button-category">
        <span>entertainment</span>
      </a>
      </p>
    </div>
  </div>
  <div width="auto" class="grid-wrapper" id="contenedor">
    <h3 v-if="!listaNoticias.length">No se han cargado noticias</h3>
    <div class="grid-item" id="noticia" v-for="(noticia, index) in listaNoticias">
      <div class="card">
        <div class="card-content">
          <div class="content">
            <span v-if="noticia.category.name == 'sports'" class="tag is-success is-medium">sports</span>
            <span v-else v-if="noticia.category.name == 'entertainment'" class="tag is-info is-medium">entertainment</span>
            <span v-else v-if="noticia.category.name == 'economy'" class="tag is-danger is-medium">economy</span>
            <span v-else v-if="noticia.category.name == 'politics'" class="tag is-black is-medium">politics</span>
            <span v-else v-if="noticia.category.name == 'local'" class="tag is-primary is-medium">local</span>
            <span v-else v-if="noticia.category.name == 'world'" class="tag is-warning is-medium">world</span>
            <p class="title is-3">{{noticia.title}}</p>
          </div>
            <div class="media">
              <img v-if="noticia.category.name == 'politics'" src="css/politics.jpg">
              <img v-else v-if="noticia.category.name == 'entertainment'" src="css/entertainment.png">
              <img v-else v-if="noticia.category.name == 'economy'" src="css/economy.jpg">
              <img v-else v-if="noticia.category.name == 'sports'" src="css/sports.jpeg">
              <img v-else v-if="noticia.category.name == 'local'" src="css/local.jpeg">
              <img v-else v-if="noticia.category.name == 'world'" src="css/world.jpeg">
            </div>
            <router-link class="button"  to="/news/:id" >Seguir leyendo...</router-link>
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
  methods: {

  },
  computed: {
    params() {
      return this.$route.params;
    },
    listaNoticias() {
      return storageService.traerNoticias();
    },
    noticiasCategoria(id) {
      return storageService.noticiasPorCategoria(id);
    },
    verUnaNoticia(){
      return storageService.verNoticia();
    }
  }
}
</script>

<style>

</style>
