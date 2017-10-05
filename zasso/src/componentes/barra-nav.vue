<template>
<div class="barra-nav">
  <div class="navbar">
    <a class="nav-item">
      <figure class="image is-32x32 figureEstilo">
        <img src="css/images.jpg">
      </figure>
    </a>
    <a class="navbar-item is-tab" href="#" @click="navegar('ingresar')">Igresar nuevo contacto</a>
    <a class="navbar-item is-tab" href="#" @click="navegar('buscar')">Buscar contactos</a>
    <a class="navbar-item is-tab" href="#" @click="navegar('papelera')">Papelera de reciclaje</a>
  </div>

</div>
</template>

<script>
export default {
  name: 'barraNav',
  methods: {
    navegar(vista) {
      this.$emit('navegar', vista);
    }
  }
}
</script>

<style>
</style>
