<template>
    <div class="app">
    	<top-menu @cambiarVista="cambiarVista"></top-menu>
        <vistaIngresar v-if="vista == 'ingresar'" @addPersona="addPersona"></vistaIngresar>
        <vistaBuscar v-if="vista == 'buscar'" :personas="personas" :denuncias="denuncias" @denunciarPersona="denunciarPersona" @contarDenuncias="contarDenuncias" @eliminarPersona="eliminarPersona"></vistaBuscar>
        <vistaDenunciar v-if="vista == 'denuncias'" @getNombre="getNombre" :nombreApellido="nombreApellido" :denunciando="denunciando" :persona="persona" :denuncias="denuncias" @denunciarPersonaII="denunciarPersonaII"></vistaDenunciar>
    </div>
</template>

<script>
	import topMenu from './top-menu.vue';
	import vistaIngresar from './vistaIngresar.vue';
	import vistaBuscar from './vistaBuscar.vue';
  import vistaDenunciar from './vistaDenunciar.vue';

    export default {
    	name: 'app',
    	components: {
    		topMenu,
    		vistaIngresar,
    		vistaBuscar,
        vistaDenunciar
    	},
    	data() {
    		return {
          personas: [],
          persona: {
            id: '',
            nombre: '',
            apellido: '',
            edad: '',
            direccion: '',
            sexo: ''
          },
          nombreApellido: '',
          denuncias: [],
          filtro: '',
          vista: 'ingresar',
          mensaje2: false,
          denunciando: false
        }
    	},
    	methods: {
    		cambiarVista(vista) {
    			this.vista = vista;
    		},
        addPersona(chabon) {
          if(!this.personas.length){
            this.personas = [];
            chabon.id = 0;
          } else {
            let indice = this.personas.length;
            chabon.id = this.personas[indice - 1].id +1;
          }
          this.personas.push(chabon);
          localStorage.setItem('personas', JSON.stringify(this.personas));
        },
        eliminarPersona(persona_a_borrar) {
          let pos = 0;
          while(this.personas[pos].id != persona_a_borrar.id) 
            pos++;
          this.personas.splice(pos, 1);
          localStorage.setItem('personas', JSON.stringify(this.personas));
        },
        denunciarPersona(chabon) { //paso 3
          this.persona = chabon;
          this.denunciando = true;
          this.vista = 'denuncias';
        },
        denunciarPersonaII(denuncia){ //ultimo paso
          denuncia.id_persona = this.persona.id;
          this.denuncias.push(denuncia);
          localStorage.setItem('denuncias', JSON.stringify(this.denuncias));
          this.denunciando = false;
        },
        cargarPersonasDenuncias(){
          const personas = localStorage.getItem('personas');
          if(personas){
            this.personas = JSON.parse(personas);
          }

          const denuncias = localStorage.getItem('denuncias');
          if(denuncias){
            this.denuncias = JSON.parse(denuncias);
          }
        },
        contarDenuncias(personita) {
          cant = 0;
          for (let i = 0; this.denuncias.length > i; i++) {
            if(this.denuncias[i].id_persona == personita.id) 
              cant++;
            }
          return cant;
        },
        getNombre(id){
            for (let i = 0; this.personas.length > i; i++) {
              if(this.personas[i].id == id) {
                this.nombreApellido = this.personas[i].nombre + " " + this.personas[i].apellido;
            }
          }
        }
    	},
      mounted(){
        this.cargarPersonasDenuncias();
      }
    }
</script>

<style scoped>

</style>
