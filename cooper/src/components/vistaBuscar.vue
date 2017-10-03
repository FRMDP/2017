<template>
    <div class="negrita">
        <div class="row">
            <h2>Listado de personas</h2>
            <input type="text" placeholder="Buscar por nombre" v-model="filtro">
            <h3 v-if="!personas.length">No hay personas</h3>
              <h4 v-if="!personasFiltradas.length">Los datos ingresados no concuerdan con ninguna persona</h4>
              <div v-else v-for="persona in personasFiltradas">
                <div id="card" class="col s12 m6 l3">
                  <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                      <h4 class="card-title">{{ persona.nombre }} {{ persona.apellido }}</h4>
                      <h6>Edad: {{ persona.edad }}</h6>
                      <h6>Direccion: {{ persona.direccion }}</h6>
                      <h6 v-if=" persona.sexo  == 'v'">Varon</h6>
                      <h6 v-else>Mujer</h6>
                      <h6 v-if="contarDenuncias(persona)">Denuncias: {{ contarDenuncias(persona) }}</h6>
                      <h6 v-else>Sin denuncias</h6>
                    </div>
                    <div class="card-action">
                      <a id="borrar" @click.prevent="eliminarPersona(persona)" href="#">Borrar</a>
                      <a @click.prevent="denunciarPersona(persona)" href="#">Denunciar</a>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'vistaBuscar',
        props: ['personas', 'vista', 'denuncias'], //recibe de App
        data() {
          return {
            filtro: ''
          }
        },
        computed: {
            personasFiltradas() {
              return this.personas.filter(p => (p.nombre.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0 || 
                p.apellido.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0 ||
                p.edad.indexOf(this.filtro) >= 0 ||
                p.direccion.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0));
            }
        },
        methods: {
          denunciarPersona(chabon){
            this.$emit('denunciarPersona', Object.assign({}, chabon))
          },
          contarDenuncias(personita) {
            cant = 0;
            for (let i = 0; this.denuncias.length > i; i++) {
              if(this.denuncias[i].id_persona == personita.id) 
                cant++;
            }
            return cant;
          },
        }
    }
</script>

<style>

</style>
