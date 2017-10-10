<template>
 <v-toolbar class="red lighten-1">
    <v-toolbar-title>Mdq News</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>Sport</v-btn>
      <v-btn flat>Local</v-btn>
      <v-btn flat>World</v-btn>
      <v-btn flat>Economy</v-btn>
      <v-btn flat>Politics</v-btn>
      <v-btn flat>Entertainment</v-btn>
    </v-toolbar-items>
  </v-toolbar>
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
