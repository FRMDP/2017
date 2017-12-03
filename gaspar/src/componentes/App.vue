<template>
    <div class="app">
      <div class="barra-nav">
        <nav class="navbar ">
          <div class="navbar-brand">
            <a class="navbar-item-a" href="/#/news">
              <img   @click="navegar('0')" src="css/newspaper.png" width="112" height="28">
            </a>
            <div id="navMenubd-example" class="navbar-menu">
              <div class="navbar-start">
                <a  class="navbar-item-a" :class="{'navbar-item-a-elegido': category == '0'}"  @click="navegar('0')">Inicio</a>
                <a  class="navbar-item-a" v-for="cat in categorias" :class="{'navbar-item-a-elegido': category == cat.uid}"  @click="navegar(cat.uid)">{{cat.name}}</a>
                <a  class="navbar-item-a" :class="{'navbar-item-a-elegido': category == '-1'}"  @click="navegar('-1')">Nueva Noticia</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    	<router-view></router-view>
  </div>
</template>

<script>
import storageService from '../services/storageService';
export default {
      data() {
          return {
              category:'0',
              categorias:''
          }
      },
      methods:{
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
      }
    },
    created(){
      storageService.traerCategorias()
          .then((response) => {
              this.categorias = response.data._embedded.categories;
          });
    }
  }

</script>

<style>

</style>
