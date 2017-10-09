<template>
      <nav>
       <div class="nav-wrapper">
        <a href="#" class="brand-logo right">Mdq News</a>
        <ul id="nav-mobile" class="left hide-on-med-and-down">

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
