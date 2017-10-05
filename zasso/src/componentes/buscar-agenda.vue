<template>
<div class="buscar-agenda" id="buscar">
  <form>
    <input class="input" type="text" placeholder="Busqueda avanzada" v-model="filtro">
  </form>
  <div width="auto" class="grid-wrapper margenesEspecificos">
    <h3 v-if="!personas.length">No hay personas</h3>
    <h3 v-if="!personasFiltradas.length">No se encontraron resultados con los parametros ingresados</h3>
    <div class="grid-item margenesEspecificos" v-else v-for="(persona, index) in personasFiltradas">
      <div class="card card-contactos">
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-5">Nombre: {{persona.nombre}}</p>
              <p class="title is-5">Apellido: {{persona.apellido}}</p>
              <div class="content">
                <p class="subtitle is-5">Edad: {{ persona.edad }}</p>
                <p class="subtitle is-5">Sexo: {{persona.sexo}}</p>
                <p class="subtitle is-5">Telefono: {{persona.telefono}}</p>
              </div>
            </div>
          </div>
        </div>
        <button class="button boton-eliminar" @click="personaAeliminar(index)">Eliminar</button>
        <button class="button boton-editar-restaurar" @click="llamarEdicion('editar',index)">Editar</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'buscarAgenda',
  props: ['vista', 'personas'],
  data() {
    return {
      filtro: '',
      mensaje: ''
    }
  },
  computed: {
    personasFiltradas() {
      return this.personas.filter(p => p.nombre.search(new RegExp(this.filtro, "i")) >= 0 ||
        p.apellido.search(new RegExp(this.filtro, "i")) >= 0 ||
        p.edad.search(new RegExp(this.filtro, "i")) >= 0 ||
        p.sexo.search(new RegExp(this.filtro, "i")) >= 0 ||
        p.telefono.search(new RegExp(this.filtro, "i")) >= 0);
    }
  },
  methods: {
    llamarEdicion(vista_e, indice) {
      this.$emit('llamarEdicion', vista_e);
      this.$emit('personaEditar', indice);

    },
    personaAeliminar(id){
      this.$emit('personaAeliminar', id);
    }
  },
  watch:
  {
    personas: function(){
      this.personasFiltradas();
    }
  }
}
</script>

<style>
</style>
