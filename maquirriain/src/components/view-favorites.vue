<template>
  <div class='view-favorites'>
    <label class="sizeSubTitle"><strong>Search favorites</strong></label>
    <br/>
    <input class="form-control" type="text" placeholder="Filter" v-model="filtro">
    <h3 v-if="!favorites.length">:(</h3>
    <card-personal v-else v-for="(persona,index) in favoritosFiltrados"
     :persona='persona' :index='index' :isFavorite='isFavorite'
        @deleteFavorite='deleteFavorite' @edit='edit'></card-personal>
  </div>
</template>
<script>

  import cardPersonal from './card-personal.vue';

  export default{
    name: 'viewFavorites',
    props: ['favorites'],
    components:{
      cardPersonal
    },
    data(){
      return{
        filtro: '',
        isFavorite: true
      }
    },
    computed: {
      favoritosFiltrados() {
        return this.favorites.filter(f => f.nombre.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0 || f.edad.indexOf(this.filtro) >= 0);
      }
    },
    methods: {
          deleteFavorite(index){
            this.$emit('deleteFavorite',index);
          },
          edit(index){
            this.$emit('edit',index);
          }
        }
  }
</script>
<style></style>
