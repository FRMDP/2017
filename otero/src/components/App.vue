<template>
    <div class="app">
        <y-top-menu @cambiarVista="cambiarVista"></y-top-menu>
        <y-mensaje :fuerte="fuerte" :mensaje="mensaje" :tipomensaje="tipomensaje" :boleanmensaje="boleanmensaje"></y-mensaje>
        <transition name="fade" mode="out-in">
            <vista-ingresar personas="personas" @agregarPersona="agregarPersona" @mostrarMensaje="mostrarMensaje" v-show="vista == 'ingresar'"></vista-ingresar>
        </transition>
        <vista-editar @guardarEdicion="guardarEdicion" :nombre="persona.nombre" :telefono="persona.telefono" :sexo="persona.sexo" :mail="persona.mail" :persona="persona" v-show="vista == 'editar'"></vista-editar>
        <vista-exportar @reemplazarListaPorTexto="reemplazarListaPorTexto" @mostrarMensaje="mostrarMensaje" :personas="personas" v-show="vista == 'exportar'"></vista-exportar>
        <vista-buscar @editarPersona="editarPersona" @mostrarMensaje="mostrarMensaje" :personas="personas" v-show="vista == 'buscar'"></vista-buscar>
    	<!--top-menu @toggleMenu="toggleMenu"></top-menu-->
    	<!--side-menu :isMenuOpen="isMenuOpen"></side-menu-->
    	<!--user-card v-for="p in personas" :persona="p"></user-card-->
        
    </div>
</template>

<script>
	import topMenu from './top-menu.vue';
	import sideMenu from './side-menu.vue';
	import userCard from './user-card.vue';
    import yTopMenu from './y-top-menu.vue';
    import yMensaje from './y-mensaje.vue';
    import vistaEditar from './vista-editar.vue';
    import vistaExportar from './vista-exportar.vue';
    import vistaIngresar from './vista-ingresar.vue';
    import vistaBuscar from './vista-buscar.vue';

    export default {
    	name: 'app',
    	components: {
    		topMenu,
    		sideMenu,
    		userCard,
            yTopMenu,
            vistaEditar,
            vistaExportar,
            vistaIngresar,
            vistaBuscar,
            yMensaje
    	},
    	data() {
    		return {
    			//isMenuOpen: true,

          persona: {
              nombre: '',
              telefono: '',
              sexo: '',
            mail:'',
          },
    			personas: [],
          vista: 'ingresar',
          boleanmensaje: false,
          fuerte:'',
          mensaje:'',
          tipomensaje:'',
          indice: null
    		}
    	},
        computed: {
            personasFiltradas() {
                return this.personas.filter(persona => persona.nombre.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0|| persona.sexo.indexOf(this.filtro) >= 0||persona.telefono == this.filtro ||persona.mail.indexOf(this.filtro) >= 0);
            },
            contenidoAexportar(){
              return JSON.stringify(this.personas);
            },
        },
    	methods: {
            agregarPersona(nuevaPersona) {
              if(!this.verSiExiste()){
                if (!nuevaPersona.sexo) {
                  nuevaPersona.sexo="indefinido";
                }
                this.personas.push(Object.assign({}, nuevaPersona));
                const nombre=nuevaPersona.nombre;
                localStorage.setItem("datos", JSON.stringify(this.personas));
                this.mostrarMensaje({fuerte:"Contacto Agregado!",mensaje:"Se ha agregado a "+nombre+" a tu agenda",tipo:"alert-success"});
              }
              else{
                this.mostrarMensaje("Advertencia!","Ya existe un contacto con alguno de esos datos","alert-warning");
              }

            },
            verSiExiste(){
              if(this.personas.filter(persona => persona.nombre.toLowerCase().indexOf(this.persona.nombre.toLowerCase()) >= 0).length>0){
                return true;
              }
              if (this.personas.filter(persona => persona.telefono == this.persona.telefono).length>0) {
                return true;
              }
              if (this.personas.filter(persona => persona.mail.indexOf(this.filtro) >= 0).length>0) {}
            },
            mostrarMensaje(datosMensaje){
              this.tipomensaje=datosMensaje.tipo;
              this.fuerte=datosMensaje.fuerte;
              this.mensaje=datosMensaje.mensaje;
              this.boleanmensaje=true;
              setTimeout(this.cerrarMensaje,3000);
            },
            cambiarVista(vista) {
                this.vista = vista;
                //this.limpiarPersona();
            },
            
            cerrarMensaje() {
                this.boleanmensaje = false;
            },
            reemplazarListaPorTexto(texto){
              this.personas=JSON.parse(texto);
            },
            editarPersona(indice){
              this.cambiarVista('editar');
              const personaAux = this.personas[indice];
              this.persona.nombre = personaAux.nombre;
              this.persona.telefono = personaAux.telefono;
              this.persona.sexo = personaAux.sexo;
              this.persona.mail = personaAux.mail;
              this.indice = indice;
            },
            guardarEdicion(personaEditada){
              const indice = this.indice;
              const persona = this.personas[indice];
              this.personas[indice].nombre = personaEditada.nombre;
              this.personas[indice].telefono = personaEditada.telefono;
              this.personas[indice].sexo = personaEditada.sexo;
              this.personas[indice].mail = personaEditada.mail;
              this.cambiarVista('buscar');
              localStorage.setItem("datos", JSON.stringify(this.personas));

            }
    	},
        mounted(){
          if (localStorage.getItem("datos")) {
            this.personas=JSON.parse(localStorage.getItem("datos"));
          }

      }
    }
</script>

<style scoped>
	.app {
		/*padding-top: 100px;*/
	}
	p {
		font-size: 50px;
	}
</style>
