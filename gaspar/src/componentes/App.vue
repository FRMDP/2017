<template>
    <div class="app">
      <barra-nav @navegar="cambiarVista"></barra-nav>
      <form-agenda @nuevaPersona="agregarPersona" @editaPersona="editarPersona"
      v-if="modulo_ag=='ingresar' || modulo_ag=='editar'" :p="persona"
      @inicio="cambiarVista" :vista="modulo_ag"></form-agenda>
      <buscar-agenda v-if="modulo_ag == 'buscar'" :personas="this.personas"
      :vista="modulo_ag" @personaAeliminar="eliminarPersona"
      @llamarEdicion="cambiarVista" @personaEditar="personaIndice"></buscar-agenda>
      <publicar-agenda v-if="modulo_ag=='publicar'" :personas="this.personas"
      :publicaciones="this.publicaciones" @nuevaPublicacion="agregarPublicacion"
      @eliminaPublicacion="eliminarPublicacion" @meGusto="meGusta"
      @meEnfado="meEnfada" @esFacho="facho"></publicar-agenda>
    </div>
</template>

<script>
import barraNav from './barra-nav.vue';
import formAgenda from './form-agenda.vue';
import buscarAgenda from './buscar-agenda.vue';
import publicarAgenda from './publicar-agenda.vue';
    export default {
    	name: 'app',
    	components: {
        barraNav,
        formAgenda,
        buscarAgenda,
        publicarAgenda
    	},
    	data() {
    		return {
          personas: [],
          modulo_ag: 'ingresar',
          persona:'',
          indice:'',
          publicaciones: []
    	}
    },
    	methods: {
        agregarPersona(payload) {
            this.personas.push(Object.assign({}, payload));
            this.agregarLista_localStorage(this.personas);
          },
          agregarLista_localStorage(lista){
            localStorage.setItem('personaList', JSON.stringify(lista));
          },
          cambiarVista(payload) {
              this.modulo_ag=payload;
              this.persona = '';
              this.indice = '';
          },
          eliminarPersona(payload){
            this.personas.splice(payload, 1);
            this.agregarLista_localStorage(this.personas);
          },
          personaIndice(payload)
          {
            this.persona = this.personas[payload];
            this.indice = payload;
          },
          editarPersona(payload){
            this.personas[this.indice]=Object.assign({}, payload);
            this.agregarLista_localStorage(this.personas);
            this.persona='';
            this.indice='';
          },
          agregarPublicacion(payload){
            this.publicaciones.push(Object.assign({}, payload));
            this.agregarPublicaciones_localStorage(this.publicaciones);
          },
          agregarPublicaciones_localStorage(lista){
            localStorage.setItem('publicacionesList', JSON.stringify(lista));
          },
          eliminarPublicacion(payload){
            debugger
            this.publicaciones.splice(payload, 1);
            this.agregarPublicaciones_localStorage(this.publicaciones);
          },
          meGusta(payload){
            debugger
            this.publicaciones[payload].mg++;
            this.agregarPublicaciones_localStorage(this.publicaciones);
          },
          meEnfada(payload){
            this.publicaciones[payload].me++;
            this.agregarPublicaciones_localStorage(this.publicaciones);
          },
          facho(payload){
            this.publicaciones[payload].facho++;
            this.agregarPublicaciones_localStorage(this.publicaciones);
          }
    	},
      mounted:function(){
        let storeLista = localStorage.getItem('personaList');
        if(storeLista != null){
          this.personas = JSON.parse(storeLista);
        }
        let storePublicaciones = localStorage.getItem('publicacionesList');
        if(storePublicaciones != null)
        {
          this.publicaciones = JSON.parse(storePublicaciones);
        }
    }
  }
</script>

<style >

</style>
