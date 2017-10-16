<template>
   <div class="container" v-show="vista == 'buscar'">
        <dir class="form-group">
         <h1 class="card-text">Usted eligio la pestaña buscar</h1>
        </dir>
        <dir class="form-group">
         <h3 class="card-text">Encontrar la lista de los contactos guardados, ademas posee un filtro para acelerar el proceso de busqueda.</h3>
         <h3 class="card-text">Para esta version el filtro es solo por nombre</h3>
        </dir>
        <div class="form-group">
           <input type="text" placeholder="Filtrar" v-model="filtro">
        </div>
       <div class="alert alert-warning" role="alert" v-if="!personas.length">
        No hay personas ingresadas en la agenda
        </div>
        <div v-if="personasFiltradas.length > 0">
          <div class="card" v-for="(persona,index) in personasFiltradas">
            <h4 class="card-header">Contacto</h4>
            <div class="card-body">
              <h4 class="card-title"> Nombre: {{ persona.nombre }} Apellido: {{ persona.apellido }}      Edad: {{ persona.edad }} Genero: {{ persona.sexo }} </h4>
              <p class="card-text">Si desea eliminarlo seleccione borrar.</p>
              <a href="#" type="submit"  class="btn btn-primary"@click.prevent="eliminarPersona(index)" >Borrar</a>
              <a href="#" type="submit" :hidden=persona.favorito  class="btn btn-primary"@click.prevent="agregarFavorito(index)" >Favorito</a>
              <p class="card-text" v-if="persona.favorito==true">En favoritos</p>
            </div>
          </div>
        </div>
        <h3 v-else>No se encontraron resultados con "{{filtro}}"</h3>
      </div>
</template>

<script>
    export default {
    	name: 'verTodos',
        props:['persona','personas'],
    	data() {
    		return {
    			filter:''
    		}
    	},
      computed: {
            personasFiltradas() {
              return this.personas.filter(p => p.nombre.toLowerCase().indexOf(this.filtro) >= 0||
               p.apellido.toLowerCase().indexOf(this.filtro) >= 0||
               p.edad.toLowerCase().indexOf(this.filtro) >= 0||
               p.sexo.toLowerCase().indexOf(this.filtro) >= 0 );
            },
          }
    	methods: {
            traerContactos:function(){
              const agendaCompleta =localStorage.getItem('personas');
              if(agendaCompleta){
                this.personas = JSON.parse(agendaCompleta);
              }
            },
            agregarFavorito:function(index) {
                this.personas[index].favorito=true;
            }
    	   }
    }
</script>

<style>
</style>
