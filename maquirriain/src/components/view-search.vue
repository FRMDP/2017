<template>
  <div class='view-search'>
      <label class="sizeSubTitle"><strong>Search people</strong></label>
      <br/>
      <input class="form-control" type="text" placeholder="Filter" v-model="filtro">
      <h3 v-if="!this.personas.length">:(</h3>
      <card-personal v-else v-for="(persona,index) in personasFiltradas"
       :persona='persona' :index='index' :isFavorite='isFavorite'
          @deletePeople='deletePeople' @edit='edit' @agregarFavorito='agregarFavorito'></card-personal>
  </div>
</template>
<script>
  import cardPersonal from './card-personal.vue';

  export default{
    name: 'viewSearch',
    props: ['personas'],
    components: {
      cardPersonal
    },
    data(){
      return{
        filtro: '',
        isFavorite: false
      }
    },
    computed: {
      personasFiltradas() {
    		return this.personas.filter(p => p.nombre.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0 || p.edad.indexOf(this.filtro) >= 0);
    	}
    },
    methods: {
      deletePeople(index){
        this.$emit('deletePeople',index);
      },
      edit(index){
        this.$emit('edit',index);
      },
      agregarFavorito(index){
        this.$emit('agregarFavorito',index);
      }
    }
  }
</script>
<style>
</style>
