<template>
    <div>
        <md-toolbar class="md-dense">
            <md-menu md-align-trigger>
            <md-button md-menu-trigger class="md-icon-button"><md-icon>menu</md-icon></md-button>
                <md-menu-content>
                    <md-menu-item @selected="$router.push('/')">volver</md-menu-item>
                    <md-menu-item @selected="$router.push('/news')">noticias</md-menu-item>
                    <md-menu-item @selected="$router.push('/categories')">categorias</md-menu-item>
                </md-menu-content>
           
            </md-menu>
            <h2 class="md-title" style="flex: 1">Diario FRMDP</h2>

            <md-button class="md-icon-button">
                <md-icon>favorite</md-icon>
            </md-button>
        </md-toolbar> 
    </div>
</template>

<script>
    export default {
    	name: 'zpMenu',
        data() {
    		return {
    		}
    	},
        methods: {
    		toggleMenu() {
    			this.$emit('toggleMenu');
    		}
    	}
    }
</script>