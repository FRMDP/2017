<template>
    <md-toolbar>
        <router-link tag="md-button" class="md-raised md-primary" to="/">Inicio <md-icon>home</md-icon></router-link>

        <router-link tag="md-button" class="md-raised md-primary" to="/category/local">Locales</router-link>
        <router-link tag="md-button" class="md-raised md-primary" to="/category/politics">Politica</router-link>
        <router-link tag="md-button" class="md-raised md-primary" to="/category/economy">Economia</router-link>
        <router-link tag="md-button" class="md-raised md-primary" to="/category/sports">Deportes</router-link>
        <router-link tag="md-button" class="md-raised md-primary" to="/category/world">Mundo</router-link>
        <router-link tag="md-button" class="md-raised md-primary" to="/category/entertainment">Entretenimiento</router-link>

        <h2 class="md-title" style="flex: 1">Reynoso News</h2>
        <router-link tag="md-button" class="md-raised md-primary" to="/add"><md-icon>add</md-icon> Noticia </router-link>
    </md-toolbar>

</template>

<script>
    export default{
        name:'newsMenu',
        data(){
            return{}
        },
    }
</script>

<style>
</style>