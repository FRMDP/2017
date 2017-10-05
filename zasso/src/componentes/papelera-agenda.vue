<template>
  <div class="papelera-agenda" id="papelera">
    <form>
      <input class="input" type="text" placeholder="Busqueda avanzada" v-model="filtro">
    </form>
    <div width="auto" class="grid-wrapper margenesEspecificos">
      <h3 v-if="!papelera.length">No hay personas</h3>
      <h3 v-if="!papeleraFiltrados.length">No se encontraron resultados con los parametros ingresados</h3>
      <div class="grid-item margenesEspecificos" v-else v-for="(persona, index) in papeleraFiltrados">
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
          <button class="button boton-eliminar" @click="personaAeliminarDefinitivamente(index)">Eliminar definitivamente</button>
          <button class="button boton-editar-restaurar" @click="restaurarPersona(index)">Restaurar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'papeleraAgenda',
  props: ['vista', 'papelera'],
  data() {
    return {
      filtro: '',
      mensaje: ''
    }
  },
  computed:{
    papeleraFiltrados() {
        return this.papelera.filter(p => p.nombre.search(new RegExp(this.filtro, "i")) >= 0 ||
            p.apellido.search(new RegExp(this.filtro, "i")) >= 0 ||
            p.edad.search(new RegExp(this.filtro, "i")) >= 0 ||
            p.sexo.search(new RegExp(this.filtro, "i")) >= 0 ||
            p.telefono.search(new RegExp(this.filtro, "i")) >= 0);
    }
  },
  methods:{
    personaAeliminarDefinitivamente(id){
      this.$emit('personaAeliminarDefinitivamente', id);
    },
    restaurarPersona(id){
      this.$emit('restaurarPersona', id);
    }
  },
  watch:
  {
    personas: function(){
      this.papeleraFiltrados();
    }
  }
}
</script>

<style>
</style>
