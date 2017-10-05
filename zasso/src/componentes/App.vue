<template>
<div class="app container">
  <barra-nav @navegar="cambiarVista"></barra-nav>
  <form-agenda v-if="modulo_ag=='ingresar' || modulo_ag=='editar'"  @nuevaPersona="agregarPersona" @editaPersona="editarPersona" :vista="modulo_ag" :p="persona" @nuevaVista="cambiarVista" ></form-agenda>
  <buscar-agenda  v-if="modulo_ag == 'buscar'" :personas="this.personas"  @personaAeliminar="eliminarPersona" @llamarEdicion="cambiarVista" @personaEditar="personaIndice"></buscar-agenda>
  <papelera-agenda v-if="modulo_ag == 'papelera'" :papelera="this.papelera"  @personaAeliminarDefinitivamente="eliminarPersonaDefinitivamente" @restaurarPersona="restaurar"></papelera-agenda>

</div>
</template>

<script>
import barraNav from './barra-nav.vue';
import formAgenda from './form-agenda.vue';
import buscarAgenda from './buscar-agenda.vue';
import papeleraAgenda from './papelera-agenda.vue';
export default {
  name: 'app',
  components: {
    barraNav,
    formAgenda,
    buscarAgenda,
    papeleraAgenda
  },
  data() {
    return {
      personas: [],
      modulo_ag: 'ingresar',
      persona: '',
      indice: '',
      papelera:[]

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
      agregarPapelera_localStorage(listaPapelera) {
          localStorage.setItem('papeleraList', JSON.stringify(listaPapelera));
      },
      eliminarPersona(payload){
        let borrado = this.personas.splice(payload, 1);
        this.agregarLista_localStorage(this.personas);
        this.papelera.push(borrado[0]);
        this.agregarPapelera_localStorage(this.papelera);
      },
      eliminarPersonaDefinitivamente(payload){
        this.papelera.splice(payload, 1);
        this.agregarPapelera_localStorage(this.papelera);
      },
      restaurar(payload) {
          let restored = this.papelera.splice(payload, 1);
          this.agregarPapelera_localStorage(this.papelera);
          this.personas.push(restored[0]);
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
    cambiarVista(payload) {
      this.modulo_ag = payload;
      this.persona = '';
      this.indice = '';
    }
  },
  mounted: function() {
    let storeLista = localStorage.getItem('personaList');
    if (storeLista != null) {
      this.personas = JSON.parse(storeLista);
    }
    let storePapelera = localStorage.getItem('papeleraList');
    if(storePapelera !=null){
      this.papelera = JSON.parse(papeleraList);
    }
  }
}
</script>

<style >
</style>
