<template>
    <transition name="fade">
        <div id="menu" class="menu" v-show="isMenuOpen">
            <nav>
            <ul>
                <li><a href="#" @click="changeView('addPerson')">Agregar Persona</a></li>
                <li><a href="#" @click="changeView('searchPersons')">Buscar Persona</a></li>
                <li><a href="#" @click="changeView('favorite')">Ver Favoritos</a></li>
            </ul>
            </nav>
        </div>
    </transition>
</template>

<script>
     export default {
    	name: 'zpSidemenu',
        props: ['isMenuOpen'],
        data(){
            return {
                
            }
        },
        methods: {
            changeView(view){
                this.$emit('changeView', view);
            }
        }
    }
</script>

