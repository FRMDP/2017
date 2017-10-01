<template>
    <div class="vista-buscar">
            <div class="row">
                <div class="col s12 m10 l6 offset-m1 offset-l3 hoja">
                    <div class="alert" id="alerta2" v-show="mensaje == true">
                        <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
                        Holy Guacamole! Contacto editado con exito.
                    </div>
                    <input type="text" placeholder="Filtrar" v-model="filtro">
                    <h3 v-if="!this.personas.length">No hay personas</h3>
                    <tarjeta-contacto v-else v-for="(persona, index) in personasFiltradas"
                        :persona="persona" :index="index" @agregarAfavoritos="agregarAfavoritos"
                        @traerPersona="traerPersona" @eliminarPersona="eliminarPersona">
                    </tarjeta-contacto>
                </div>
            </div>
    </div>
</template>

<script>
    import tarjetaContacto from './tarjeta-contacto.vue';

    export default {
        name: 'vistaBuscar',
        props: ['personas'],
        components: {
            tarjetaContacto
        },
        data() {
            return {
                filtro: '',
                mensaje: false
            }
        },
        computed: {
            personasFiltradas() {
                return this.personas.filter(p => p.nombre.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0 ||
                p.apellido.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0 ||
                p.edad.indexOf(this.filtro) >= 0 ||
                p.telefono.indexOf(this.filtro) >= 0 ||
                p.sexo.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0 ||
                p.gustos.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0);
            }
        },
        methods: {
            agregarAfavoritos(index){
                this.$emit('agregarAfavoritos', index);
            },
            traerPersona(index){
                this.$emit('traerPersona', index);
            },
            eliminarPersona(index) {
                this.$emit('eliminarPersona', index);
            }
        }
    }
</script>

<style>
    
</style>