<template>

  <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Logo</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><router-link to="/add">Add News</router-link></li>
        <li><router-link to="/all">Pagina principal</router-link></li>
        <li><router-link to=/category/1>Sports</router-link></li>
        <li><router-link to=/category/2>Local</router-link></li>
        <li><router-link to=/category/3>World</router-link></li>
        <li><router-link to=/category/4>Economy</router-link></li>
        <li><router-link to=/category/5>Politics</router-link></li>
        <li><router-link to=/category/6>Entertainment</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
    export default {
    	name: 'topMenu',
        props: ['vista'],
    	data() {
    		return {
         mensaje:false
    		}
    	},
    	methods: {
    		cambiarVista(vista) {
                this.$emit('cambiarVista', vista);
            }
    	}

    }
</script>

<style>
</style>
