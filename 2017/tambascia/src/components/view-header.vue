<template>
    <div class="row">
        <div class="col-md-12">
            <nav class="navbar navbar-expand-lg  navbar navbar-dark bg-dark">
                <a href="/" class="navbar-brand">Argentina Today</a>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a href="/#/add" class="nav-link">Agregar</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Categorias
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a href="/#/category/1" class="dropdown-item" >Deportes</a>
                                <a href="/#/category/2" class="dropdown-item" >Local</a>
                                <a href="/#/category/3" class="dropdown-item" >Economia</a>
                                <a href="/#/category/4" class="dropdown-item" >Mundo</a>
                                <a href="/#/category/5" class="dropdown-item" >Politica</a>
                                <a href="/#/category/6" class="dropdown-item" >Entretenimiento</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'viewHeader',
    }

</script>
<style>

</style>
