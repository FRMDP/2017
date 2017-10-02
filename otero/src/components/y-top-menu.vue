<template>
    <nav id="navegacion" class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Mi Agenda</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <h4 class="navbar-toggler-icon"></h4>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="#" @click="cambiarVista('ingresar')">Ingresar<h4 class="sr-only">(current)</h4></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click="cambiarVista('buscar')">Buscar</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click="cambiarVista('exportar')">Exportar / Importar</a>
          </li>
        </ul>
      </div>
    </nav>
</template>

<script>
    export default {
        name: 'y-top-menu',
        props: [''],
        methods:{
            cambiarVista(vista){
                this.$emit('cambiarVista', vista);
            }
        }
    }
</script>

<style>
    
</style>
