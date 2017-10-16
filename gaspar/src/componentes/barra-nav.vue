<template>
    <div class="barra-nav">
      <nav class="navbar ">
        <div class="navbar-brand">
          <a class="navbar-item-a" href="index.html">
            <img src="css/overlay-agenda-1015b990f3bc0f981173250f429a1c19.png" width="112" height="28">
          </a>
          <div id="navMenubd-example" class="navbar-menu">
            <div class="navbar-start">
              <a id="n1" class="navbar-item-a" :class="{'navbar-item-a-elegido': vista == 'ingresar'}" href="#" @click="navegar('ingresar')">Agregar</a>
              <a id="n2" class="navbar-item-a" :class="{'navbar-item-a-elegido': vista == 'buscar'}" href="#" @click="navegar('buscar')">Buscar</a>
              <a id="n3" class="navbar-item-a" :class="{'navbar-item-a-elegido': vista == 'publicar'}" href="#" @click="navegar('publicar')">Publicar</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
</template>

<script>
    export default {
    	name: 'barraNav',
      data() {
        return {
          vista: 'ingresar'
        }
      },
      methods:{
        navegar(vista) {
          this.vista = vista;
          this.$emit('navegar', vista);
    }
  }
}
</script>

<style>

</style>
