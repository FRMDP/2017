<template>
    <nav>
        <div class="nav-wrapper negrita">
            <a href="#!" class="brand-logo right">TP5</a>
            <ul class="left hide-on-med-and-down">
                <li><a class="nav-link" href="#" @click="cambiarVista('ingresar')">Ingresar persona</a></li>
                <li><a class="nav-link" href="#" @click="cambiarVista('buscar')">Buscar</a></li>
                <li><a class="nav-link" href="#" @click="cambiarVista('denuncias')">Denuncias</a></li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
    	name: 'topMenu',
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
