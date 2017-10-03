<template>
      <nav>
       <div class="nav-wrapper">
        <a href="#" class="brand-logo right">Contacts</a>
        <ul id="nav-mobile" class="left hide-on-med-and-down">
          <li><a href="#"@click="cambiarVista('ingresar')">New Contact</a></li>
          <li><a href="#"@click="cambiarVista('buscar')">Search</a></li>
          <li><a href="#"@click="cambiarVista('favorites')">favorites</a></li>
          <li><a href="#"@click="cambiarVista('about')">About</a></li>
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
