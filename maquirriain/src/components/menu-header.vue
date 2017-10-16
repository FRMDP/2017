<template>
    <div class='menu-header'>
      <header>
         <div class="container-fluid">
           <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
             <a class="navbar-brand" href="#">Agenda</a>
             <a class="nav-link" href="#" @click="cambiarVista('ingresar')">Add</a>
             <a class="nav-link" href="#" @click="cambiarVista('buscarPersonas')">Search</a>
             <a class="nav-link" href="#" @click="cambiarVista('buscarFavoritos')">Favorites</a>
           </nav>
         </div>
      </header>
    </div>
</template>
<script>
  export default {
    name: 'menuHeader',
    data() {
      return {

          }
    },
    methods: {
          cambiarVista(vista) {
            this.$emit('cambiarVista', vista);
          }    }
  }
</script>
<style>

</style>
