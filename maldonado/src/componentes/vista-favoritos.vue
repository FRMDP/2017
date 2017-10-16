<template>
    <div class="vista-favoritos">
            <div class="row">
                <div class="col s12 m10 l6 offset-m1 offset-l3 hoja">
                    <input type="text" placeholder="Filtrar" v-model="filtro">
                    <h3 v-if="!this.favoritos.length">No has agregado favoritos</h3>
                    <tarjeta-contacto v-else v-for="(persona, index) in favoritosFiltrados"
                        :persona="persona" :index="index" :isFavorito="isFavorito"
                        @eliminarFavorito="eliminarFavorito">
                    </tarjeta-contacto>
                </div>
            </div>
    </div>
</template>

<script>
    import tarjetaContacto from './tarjeta-contacto.vue';

    export default {
        name: 'vistaFavoritos',
        props: ['favoritos'],
        components: {
            tarjetaContacto
        },
        data() {
            return {
                filtro: '',
                isFavorito: true
            }
        },
        computed: {
            favoritosFiltrados() {
                return this.favoritos.filter(f => f.nombre.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0 ||
                    f.apellido.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0 ||
                    f.edad.indexOf(this.filtro) >= 0 ||
                    f.telefono.indexOf(this.filtro) >= 0 ||
                    f.sexo.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0 ||
                    f.gustos.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0);
            }
        },
        methods: {
            eliminarFavorito(index) {
                this.$emit('eliminarFavorito', index);
            }
        }
    }
</script>

<style>
    
</style>