<template>
    <div class="app">
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
