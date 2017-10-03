<template>
    <div class="app">
      <menu-header @cambiarVista='cambiarVista'></menu-header>
      <div class='container-fluid'>
        <div class='row justify-content-center'>
          <div class='col-md-4 center'>
            <view-add v-show="vista == 'ingresar'" @agregarPersona='agregarPersona'></view-add>
            <view-search v-show="vista == 'buscarPersonas'" :personas='personas' @deletePeople='deletePeople' @edit='edit' @agregarFavorito='agregarFavorito'></view-search>
            <view-edit v-show="vista == 'editPeople'" :index='index' :vista='vista' :favorites='favorites' :persona='persona' @saveEditing='saveEditing'></view-edit>
            <view-favorites v-show="vista == 'buscarFavoritos'" @deleteFavorite='deleteFavorite' @edit='edit'  :favorites='favorites'></view-favorites>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
	import menuHeader from './menu-header.vue';
  import viewAdd from './view-add.vue';
  import viewSearch from './view-search.vue';
  import viewEdit from './view-edit.vue';
  import viewFavorites from './view-favorites.vue';


    export default {
    	name: 'app',
    	components: {
          menuHeader,
          viewAdd,
          viewSearch,
          viewEdit,
          viewFavorites
    	},
    	data() {
    		return{
          personas: [],
          favorites: [],
          vista:'ingresar',
          persona: {
            nombre: '',
          	edad: '',
          	sexo: '',
            descripcion: ''
          },
          index:null,
          type:null
        }
    	},
    	methods: {

        agregarPersona(peopleAdd) {
          this.personas.push(peopleAdd);
          //this.limpiarPersona();
          this.mensajePersonaAgregada = true;
          this.savePeopleStorage();
        },
        agregarFavorito(index) {
          const nuevoFavorito = this.personas.splice(index, 1);
          this.favorites.push(nuevoFavorito[0]);
          this.mensajeFavoritoAgregado = true;
          this.saveFavoriteStorage();
          this.savePeopleStorage();
        },
        //Cambio de vistas
        cambiarVista(vista) {
          this.vista = vista;
        //  this.limpiarPersona();
        },
        //Borrado de listas
        deletePeople(index) {
          this.personas.splice(index,1);
          this.savePeopleStorage();
          this.mensajeBorrado = true;
        },
        deleteFavorite(index) {
          const backToContacts = this.favorites.splice(index, 1);
          this.personas.push(backToContacts[0]);
          this.mensajeBorrado = true;
          this.savePeopleStorage();
          this.saveFavoriteStorage();
        },
        //Trayendo y guardando en localStorage
        savePeopleStorage()
        {
          localStorage.setItem('people',JSON.stringify(this.personas));
        },
        getPeopleStorage(){
          const people = localStorage.getItem('people');
          if(people)
          {
            this.personas = JSON.parse(people);
          }
        },
        saveFavoriteStorage()
        {
          localStorage.setItem('favorite',JSON.stringify(this.favorites));
        },
        getFavoriteStorage(){
          const favorite = localStorage.getItem('favorite');
          if(favorite)
          {
            this.favorites = JSON.parse(favorite);
          }
        },
        //Editado y guardado
        edit(index){
          if(this.vista == 'buscarPersonas'){
            this.cambiarVista('editPeople');
            const people = this.personas[index];
            this.persona.nombre = people.nombre;
            this.persona.edad = people.edad;
            this.persona.sexo = people.sexo;
            this.persona.descripcion = people.descripcion;
            this.index = index;
            this.type='person';
          }else{
            this.cambiarVista('editPeople');
            const people = this.favorites[index];
            this.persona.nombre = people.nombre;
            this.persona.edad = people.edad;
            this.persona.sexo = people.sexo;
            this.persona.descripcion = people.descripcion;
            this.index = index;
            this.type='favorite';
          }
        },
        saveEditing(){
          const index = this.index;
          if(this.type == 'person'){
            const persona = this.personas[index];
            this.personas[index].nombre = this.persona.nombre;
            this.personas[index].edad = this.persona.edad;
            this.personas[index].descripcion = this.persona.descripcion;
            this.personas[index].sexo = this.persona.sexo;
            this.mensajeEditado = true;
            this.cambiarVista('buscarPersonas');
            this.savePeopleStorage();
          }else{
            const persona = this.favorites[index];
            this.favorites[index].nombre = this.persona.nombre;
            this.favorites[index].edad = this.persona.edad;
            this.favorites[index].descripcion = this.persona.descripcion;
            this.favorites[index].sexo = this.persona.sexo;
            this.mensajeEditado = true;
            this.cambiarVista('buscarFavoritos');
            this.saveFavoriteStorage();
          }
        },
      },
      mounted(){
        this.getPeopleStorage();
        this.getFavoriteStorage();
      }
    }
</script>

<style>
</style>
