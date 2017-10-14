<template>
    <div class="app">
	   <!-- <router-link to="/buscar">Buscar</router-link>
	    <router-link to="/agregar">Agregar</router-link>-->
      <b-container fluid>

          <rm-TopMenu></rm-TopMenu>
          
    </b-container>
    	<router-view></router-view>
    </div>
</template>

<script>
    import rmTopMenu from './rm-topMenu.vue';

    export default {
      name: 'app',
      data() {
        return{

        }
      },
      components: {
        rmTopMenu
      },
      mounted(){

      }
    }
</script>

<style>

</style>
