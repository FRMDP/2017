<template>
    <transition name="fade" mode="out-in">
        <div class="vista vbuscar">

          <input class="form-control form-group" type="text" placeholder="Filtrar" v-model="filtro">


          <h3 v-if="!personas.length">No hay personas</h3>
          <div v-else class="row">
            <h3 v-if="!personasFiltradas.length">Ningun contacto coincide con la busqueda</h3>
            <div  v-for="(persona,indice) in personasFiltradas" class="col-md-4 form-group">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">{{ persona.nombre }}</h4>
                  <hr>
                  <p class="card-text">Telefono: {{persona.telefono}}</p>
                  <p class="card-text">Mail: {{persona.mail}}</p>
                  <p class="card-text">Sexo: {{persona.sexo}}</p>
                  <a href="#" class="btn btn-primary" @click="eliminarPersona(indice)"> Eliminar</a>
                  <a href="#" class="btn btn-primary" @click="editarPersona(indice)"> Editar</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
</template>

<script>
    export default {
        name: 'vista-buscar',
        props: ['personas'],
        data(){
        	return {
        		filtro: '',
        	}
        },
        computed: {
            personasFiltradas() {
                return this.personas.filter(persona => persona.nombre.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0|| persona.sexo.indexOf(this.filtro) >= 0||persona.telefono == this.filtro ||persona.mail.indexOf(this.filtro) >= 0);
            },
        },
        methods: {
            eliminarPersona(indice){
              const nombre = this.personas[indice].nombre;
              this.personas.splice(indice, 1);
              localStorage.setItem("datos", JSON.stringify(this.personas));
              this.$emit('mostrarMensaje',{fuerte:"Eliminado!",mensaje:"Contacto "+nombre+" a sido liminado",tipo:"alert-danger"});
            },
            editarPersona(indice){
            	this.$emit('editarPersona',indice);
            }
        }
    }
</script>

<style>
    
</style>