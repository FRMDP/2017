<template>
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
</template>

<script>
    export default {
        name: 'tarjeta',
        props: ['persona'],
        methods: {
          eliminarPersona(chabon){
            this.$emit('eliminarPersona', chabon)
          },
          denunciarPersona(chabon){ //paso 1
            this.$emit('denunciarPersona', chabon)
          },
          contarDenuncias(chabon) {
            this.$emit('contarDenuncias', chabon)
          },
        }
    }
</script>

<style>

</style>
