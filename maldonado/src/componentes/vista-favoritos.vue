<template>
    <div class="vista-favoritos">
            <div class="row">
                <div class="col s12 m10 l6 offset-m1 offset-l3 hoja">
                    <input type="text" placeholder="Filtrar" v-model="filtro">
                    <h3 v-if="!this.favoritos.length">No has agregado favoritos</h3>
                    <h3 v-if="!favoritosFiltrados">Favorito no encontrado</h3>
                    <div v-else v-for="(favorito, index) in favoritosFiltrados">
                        <div class="card cardContent">
                            <h4 class="card-title">{{ favorito.nombre }}, {{ favorito.apellido }}</h4>
                            <p class="card-text">Edad: {{ favorito.edad }}</p>
                            <p class="card-text">Sexo: {{favorito.sexo }}</p>
                            <p class="card-text">Telefono: {{favorito.telefono}}</p>
                            <p class="card-text">Gustos: {{ favorito.gustos }}</p>
                            <div class="card-action">
                                <div class="cardActionContent">
                                    <a class="deleteBtn btn-floating btn-large waves-effect waves-light red"
                                         @click.prevent="eliminarFavorito(index)">
                                         <i class="material-icons">delete</i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
    export default {
        name: 'vistaFavoritos',
        props: ['favoritos'],
        data() {
            return {
                filtro: '',
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