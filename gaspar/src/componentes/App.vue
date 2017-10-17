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
                <a  class="navbar-item-a" :class="{'navbar-item-a-elegido': category == '0'}" :href="'/#/news/'"  @click="navegar('0')">Inicio</a>
                <a  class="navbar-item-a" :class="{'navbar-item-a-elegido': category == '1'}" :href="'/#/category/'+this.category"  @click="navegar('1')">Sports</a>
                <a  class="navbar-item-a" :class="{'navbar-item-a-elegido': category == '2'}" :href="'/#/category/'+this.category"  @click="navegar('2')">Local</a>
                <a  class="navbar-item-a" :class="{'navbar-item-a-elegido': category == '3'}" :href="'/#/category/'+this.category"  @click="navegar('3')">World</a>
                <a  class="navbar-item-a" :class="{'navbar-item-a-elegido': category == '4'}" :href="'/#/category/'+this.category"  @click="navegar('4')">Economy</a>
                <a  class="navbar-item-a" :class="{'navbar-item-a-elegido': category == '5'}" :href="'/#/category/'+this.category"  @click="navegar('5')">Politics</a>
                <a  class="navbar-item-a" :class="{'navbar-item-a-elegido': category == '6'}" :href="'/#/category/'+this.category"  @click="navegar('6')">Enternainment</a>
                <a  class="navbar-item-a" :class="{'navbar-item-a-elegido': category == '-1'}" :href="'/#/addnew'"  @click="navegar('-1')">Nueva Noticia</a>
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
              category:'0'
          }
      },
      methods:{
        navegar(cat){
          this.category = cat;
        }
      },
      computed:{
        params() {
              return this.$route.params;
        },
        cat() {
              return this.$route.params.cat;
          },
        id(){
          return this.$route.params.id;
        }
      },
      watch: {
        '$route.params.cat': function() {
          if(this.cat)
          {
          this.category = this.cat;
          }
        },
        '$route.params.id': function(){
          if (this.id)
          {
            this.category = storageService.traerCategoria(this.id);
          }
        }
    }
  }
</script>

<style>

</style>
