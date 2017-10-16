<template>
    <header class="navbar navbar-inverse">
        <div class="container-fluid">
            <ul class="nav navbar-nav">
                <li><a href="#" @click="changeView('start')"><span class="glyphicon glyphicon-home"></span> Inicio </a></li>
                <li><a href="#" @click="changeView('add')"><span class="glyphicon glyphicon-user"></span> Agregar </a></li>
                <li><a href="#" @click="changeView('seeall')"><span class="glyphicon glyphicon-list"></span> Ver todos</a></li>
                <li><a href="#" @click="changeView('filter')"><span class="glyphicon glyphicon-search"></span> Filtrar</a></li>
                <li><a href="#" @click="changeView('favorite')"><span class="glyphicon glyphicon-star"></span> Favoritos</a></li>
            </ul>
        </div>
    </header>
</template>

<script>
    export default{
        name: "menuBar",
        props: ["view"],
        data() {
            return {
            }
        },
        methods:{
            changeView(view){
                this.$emit('changeView', view);
            }
        }
    }
</script>

<style>
    .navbar{
        font-weight: bold;
        font-size: large;

    }
</style>