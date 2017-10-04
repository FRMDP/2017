<template>
    <div class="negrita container">
        <div class="row">
            <h2>Listado de personas</h2>
            <input type="text" placeholder="Buscar por nombre" v-model="filtro">
            <h3 v-if="!personas.length">No hay personas</h3>
            <h4 v-if="!personasFiltradas.length">Los datos ingresados no concuerdan con ninguna persona</h4>
            <tarjeta-persona v-else v-for="persona in personasFiltradas" :persona="persona" @denunciarPersona="denunciarPersona" @eliminarPersona="eliminarPersona">
            </tarjeta-persona>
        </div>
    </div>
</template>

<script>
    import tarjetaPersona from './tarjeta-persona.vue';

    export default {
        name: 'vistaBuscar',
        props: ['personas', 'vista', 'denuncias'], //recibe de App
        components: {
          tarjetaPersona
        },
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
          denunciarPersona(chabon){ //paso 2
            this.$emit('denunciarPersona', chabon);
          },
          eliminarPersona(chabon){
            this.$emit('eliminarPersona', chabon)
          }
        }
    }
</script>

<style>

</style>
