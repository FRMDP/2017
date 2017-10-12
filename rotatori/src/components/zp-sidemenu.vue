<template>
    <transition name="fade">
         <md-menu-content>
                <md-menu-item>My Item 1</md-menu-item>
                <md-menu-item>My Item 2</md-menu-item>
                <md-menu-item>My Item 3</md-menu-item>
            </md-menu-content>
        <!--<md-menu md-align-trigger>
            <md-button md-menu-trigger>Align trigger</md-button>

           
        </md-menu>
        <div id="menu" class="menu">
            <nav>
            <ul>
                <li @click="toggleMenu"><router-link to="/">Volver</router-link></li>
                <li @click="toggleMenu"><router-link to="/news">Noticias</router-link></li>
                <li @click="toggleMenu"><router-link to="/categories">Categorias</router-link></li>
            </ul>
            </nav>
        </div>-->
    </transition>
</template>

<script>
     export default {
    	name: 'zpSidemenu',
        data(){
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

