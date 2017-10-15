<template>
    <div class="app">
    	<top-menu></top-menu>
      <router-view></router-view>
    </div>
</template>

<script>
	import topMenu from './top-menu.vue';
  import serviceCategory from '../services/serviceCategory';
  import serviceNews from '../services/serviceNews';
  import serviceReporter from '../services/serviceReporter';

    export default {
    	name: 'app',
    	components: {
    		topMenu
    	},
      mounted(){
        
      }
    }
</script>

<style scoped>

</style>