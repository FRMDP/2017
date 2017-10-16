<template>
      <div class="row">
        <div class="col s12 m6">
          <h3 v-if="!noticias.length">Looks so empty</h3>
          <div class="card blue-grey darken-1" v-else v-for="(noticia,index) in noticias">
            <div class="card-content white-text">
              <span class="card-title">{{noticia.title}}</span>
              <p>Date:{{noticia.date}}</p>
              <p>Category:{{noticia.category.name}}</p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
  import storageService from '../services/storageService';
		export default {
        name: 'viewAll',
        data(){
          return{
            noticias:[]
          }
        },
        methods: {
        },
        mounted(){
          this.noticias=storageService.traerNoticias();
        }
    }
</script>