<template>
  <div class="card-personal">
    <div class='card'>
      <div class="card-body">
        <h4 class="card-title">{{persona.nombre}}</h4>
        <p class="card-title"><strong>Age: {{persona.edad}}</strong></p>
        <p class="card-title"><strong>Sex: {{persona.sexo}}</strong></p>
        <p class="card-text">{{persona.descripcion}} </p>
        <a v-if="!this.isFavorite"href="#" class="spaceButton" @click="deletePeople(index)">Delete</a>
        <a href="#" class="spaceButton" @click='edit(index)'>Edit</a>
        <a v-if="!this.isFavorite"href="#" class="spaceButton" @click='agregarFavorito(index)'>Add Favorite</a>
        <a v-if="this.isFavorite" href="#" class="spaceButton" @click="deleteFavorite(index)">Delete</a>
      </div>
    </div>
  </div>
</template>
<script>
      export default{
        name: 'cardPersonal',
        props: ['persona','index','isFavorite'],
        data() {
          return {

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
          },
          deleteFavorite(index){
            this.$emit('deleteFavorite',index);
          }
        }
      }

</script>
<style>

</style>
