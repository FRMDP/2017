<template>
    <div class="app">
    	<top-menu @cambiarVista="cambiarVista"></top-menu>
        <vistaIngresar v-if="vista == 'ingresar'" @addPersona="addPersona" :persona="persona"></vistaIngresar>
        <vistaBuscar v-if="vista == 'buscar'" :personas="personas" :denuncias="denuncias" @denunciarPersona="denunciarPersona"></vistaBuscar>
        <vistaDenunciar v-if="vista == 'denuncias'" :denunciando="denunciando" :denuncias="denuncias"></vistaDenunciar>
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
                persona: {
                  id: '',
                  nombre: '',
                  apellido: '',
                  edad: '',
                  direccion: '',
                  sexo: ''
                },
                personas: [],
                denuncia: {
                  id_persona: '',
                  motivo: '',
                  descripcion: ''
                },
                denuncias: [],
                filtro: '',
                vista: 'ingresar',
                mensaje2: false,
                denunciando: false
            }
    	},
    	methods: {
    		cambiarVista(vista) {
    			console.log(vista);
    			this.vista = vista;
    		},
        addPersona(chabon) {
          chabon.id = this.personas.length;
          this.personas.push(Object.assign({}, chabon));
          localStorage.setItem('personas', JSON.stringify(chabon));
        },
        denunciarPersona(chabon) {
          this.persona = chabon;
          this.denunciando = true;
          this.vista = 'denuncias';
        }
    	},
      mounted(){
        const personas = localStorage.getItem('personas');
        if(!personas){
          this.personas = JSON.parse(personas)
        }

        const denuncias = localStorage.getItem('denuncias');
        if(!denuncias){
          this.denuncias = JSON.parse(denuncias)
        }
      }
    }
</script>

<style scoped>

</style>
