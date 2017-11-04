<template>
    <md-toolbar>
        <router-link tag="md-button" class="md-raised md-primary" to="/">Inicio <md-icon>home</md-icon></router-link>

        <router-link tag="md-button" class="md-raised md-primary" to="/category/local"><md-icon class="md-size-3x">location_city</md-icon></router-link>
        <router-link tag="md-button" class="md-raised md-primary" to="/category/politics"><md-icon class="md-size-3x">group</md-icon></router-link>
        <router-link tag="md-button" class="md-raised md-primary" to="/category/economy"><md-icon class="md-size-3x">attach_money</md-icon></router-link>
        <router-link tag="md-button" class="md-raised md-primary" to="/category/sports"><md-icon class="md-size-3x ">directions_bike</md-icon></router-link>
        <router-link tag="md-button" class="md-raised md-primary" to="/category/world"><md-icon class="md-size-3x ">public</md-icon></router-link>
        <router-link tag="md-button" class="md-raised md-primary" to="/category/entertainment"><md-icon class="md-size-3x ">videocam</md-icon></router-link>

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