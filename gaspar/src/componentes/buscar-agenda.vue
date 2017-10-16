<template>
  <div class="buscar-agenda" id="buscar">
    <h3>Busqueda</h3>
    <input class="busqueda" type="text" placeholder="Filtrar por cualquier campo" v-model="filtro">
    <div width="auto" class= "grid-wrapper" id="contenedor">
      <h3 v-if="!personas.length">No hay personas</h3>
      <h3 v-else-if="!personasFiltradas.length ">No se encontraron personas que coincidan con los criterios de busqueda</h3>
      <div class="grid-item" id="agenda" v-else v-for="(persona, index) in personasFiltradas">
        <div class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img src="css/contacto.png" alt="Placeholder image">
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-6">Nombre: {{persona.nombre}}</p>
                <p class="title is-6">Apellido: {{persona.apellido}}</p>
                <div class="content">
                  <p class="subtitle is-6">Edad: {{ persona.edad }}</p>
                  <p class="subtitle is-6">Sexo: {{persona.sexo}}</p>
                  <p class="subtitle is-6">Telefono: {{persona.telefono}}</p>
                  <p class="subtitle is-6">Direccion: {{persona.direccion}}</p>
                </div>
              </div>
            </div>
          </div>
          <div  class="botones">
          <button class="button" @click="llamarEdicion('editar',index)">Editar</button>
          <button class="button" @click="personaAeliminar(index)">Eliminar</button>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
    	name: 'buscarAgenda',
    	props: ['personas'],
      data() {
        return {
          filtro:'',
          mensaje:''
        }
      },
      computed: {
        personasFiltradas() {
            return this.personas.filter(
                p => p.nombre.search(new RegExp(this.filtro, "i")) >= 0 ||
                p.apellido.search(new RegExp(this.filtro, "i")) >= 0 ||
                p.edad.search(new RegExp(this.filtro, "i")) >= 0 ||
                p.telefono.search(new RegExp(this.filtro, "i")) >= 0 ||
                p.direccion.search(new RegExp(this.filtro, "i")) >= 0 ||
                p.sexo.search(new RegExp(this.filtro, "i")) >= 0
            );
          }
    },
    methods:{
      llamarEdicion(vista_e,indice){
        this.$emit('llamarEdicion',vista_e);
        this.$emit('personaEditar',indice);
      },
      personaAeliminar(id){
        this.$emit('personaAeliminar', id);
      }
    }
  }
</script>

<style>

</style>
