<template>
 <v-toolbar class="red lighten-1">
    <v-toolbar-title>Mdq News</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
    <v-toolbar-items class="hidden-sm-and-down">
      <router-link to="/all"><v-btn flat>Pagina principal</v-btn></router-link>
      <router-link to="/add"><v-btn flat>Add News</v-btn></router-link>
      <router-link to=/news/1><v-btn flat>Ver noticia 1</v-btn></router-link>
      <router-link to=/category/1><v-btn flat>Sport</v-btn></router-link>
      <router-link to=/category/2><v-btn flat>Local</v-btn></router-link>
      <router-link to=/category/3><v-btn flat>World</v-btn></router-link>
      <router-link to=/category/4><v-btn flat>Economy</v-btn></router-link>
      <router-link to=/category/5><v-btn flat>Politics</v-btn></router-link>
      <router-link to=/category/6><v-btn flat>Entertainment</v-btn></router-link>
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
