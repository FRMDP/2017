<template>
  <div class="card">
    <div class="card-content">
      <h3>All the news</h3>
      <div class="row">
        <div class="col s12 m6">
          <h3 v-if="!noticias.length">Looks so empty</h3>
          <div class="card blue-grey darken-1" v-else v-for="(noticia,index) in noticias">
            <div class="card-content white-text">
              <span class="card-title">{{noticia.title}}</span>
              <p>Date:{{noticia.date}}</p>
            </div>
            <div class="card-action">
              <a href="#"><router-link v-bind:to="'/news/'+noticia.uid">Read</router-link></a>
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
        name: 'viewAll',
        data(){
          return{
            noticias:[]
          }
        },
        methods: {
          getNoticias(){
            storageService.traerNoticias()
            .then((response) => {
              this.noticias = response.data._embedded.news;
            });
          }
        },
        mounted(){
          this.getNoticias();
        }
    }
</script>