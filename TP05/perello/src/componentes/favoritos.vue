<template>
    <div class="container" v-show="vista == 'favoritos'">
        <dir class="form-group">
         <h1 class="card-text">Usted eligio la pestaña favoritos</h1>
        </dir>
        <div class="alert alert-warning" role="alert" v-if="!personas.length">
        No hay personas ingresadas en la agenda
        </div>
        <div v-if="personasFavorito.length > 0">
            <div v-for="(persona,index) in personas">
              <div v-if="persona.favorito==true">
                <div class="card">
                  <h4 class="card-header">Contacto</h4>
                   <div class="card-body">
                    <h4 class="card-title"> Nombre: {{ persona.nombre }} Apellido: {{ persona.apellido }}      Edad: {{ persona.edad }} Genero: {{ persona.sexo }} </h4>
                    <a href="#" type="submit"  class="btn btn-primary"@click.prevent="eliminarFavorito(index)" >Eliminar favorito</a>
                   </div>
                </div>
              </div>
            </div>
        </div>
        <h3 v-else>Aun no has agregado ningun contacto como favorito :(</h3>
      </div>
</template>

<script>
    export default {
    	name: 'favoritos',
        props:['persona','personas'],
        computed: {
            personasFavorito() {
                return this.personas.filter(p => p.favorito==true);
            },
        },
    	methods: {
    		eliminarFavorito:function(index){
            this.personas[index].favorito=false;
            this.agregarContactoLocalStorage();
            },
    	}
    }
</script>

<style>
</style>
