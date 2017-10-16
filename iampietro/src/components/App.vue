<template>
	<div>
		<agenda-nav @cambiarVista="cambiarVista"></agenda-nav>
		<vista-agregarPersona v-show="vista == 'ingresar'" @agregarPersona="agregarPersona">						  </vista-agregarPersona>
		<vista-buscar v-show="vista == 'buscar'" @agregarAfavoritos="agregarAfavoritos" 						    	:personas="personas"				 @eliminarPersona="eliminarPersona"
												 @personToEdit="personToEdit">
		</vista-buscar>	
		<vista-editarPersona v-show="vista == 'editar'" @guardarCambios="guardarCambios"
		:personaEditable="personaEditable">
		</vista-editarPersona>
		<vista-favoritos v-show="vista == 'favoritos'" @quitarFavorito="quitarFavorito"
			:personas="personas">
			
		</vista-favoritos>
	</div>
</template>

<script>
	import agendaNav from './agenda-nav.vue';
	import vistaAgregarPersona from './vista-agregarPersona.vue';
	import vistaBuscar from './vista-buscar.vue';
	import vistaEditarPersona from './vista-editarPersona.vue';
	import vistaFavoritos from './vista-favoritos.vue';

	export default {
		name:'agenda',
		components: {
			agendaNav,
			vistaAgregarPersona,
			vistaBuscar,
			vistaEditarPersona,
			vistaFavoritos
		},
		data() {
			return {
				vista: 'ingresar',
				personas: [],
				indexPersonaEliminar: '',
				indexPersonaEditada: '',
				personaEditable: {
					nombre: '',
					apellido: '',
					edad: '',
					sexo: '',
					mail: ''
				}
			}
		},
		methods: {
			saveContactsToStorage() {
				localStorage.setItem('personas',JSON.stringify(this.personas));
			},
			getContactsFromStorage() {
				const contactos = localStorage.getItem('personas');
				if (contactos) {
          		  this.personas = JSON.parse(contactos);
          		}
			},
			cambiarVista(vista) {
				this.vista = vista;
			},
			agregarPersona(persona) {
				this.personas.push(persona);
				this.saveContactsToStorage();
			},
			agregarAfavoritos(persona) {
				this.indexPersonaEditada = this.personas.indexOf(persona);
				this.personas[this.indexPersonaEditada].favoritos = true;
				this.saveContactsToStorage();
			},
			eliminarPersona(persona) {
				this.indexPersonaEliminar = this.personas.indexOf(persona);
				this.personas.splice(this.indexPersonaEliminar, 1);
				this.saveContactsToStorage();
				this.indexPersonaEliminar = '';
			},
			personToEdit(personaAeditar) {
				this.indexPersonaEditada = this.personas.indexOf(personaAeditar);
				this.personaEditable.nombre = this.personas[this.indexPersonaEditada].nombre;
				this.personaEditable.apellido = this.personas[this.indexPersonaEditada].apellido;
				this.personaEditable.edad = this.personas[this.indexPersonaEditada].edad;
				this.personaEditable.sexo = this.personas[this.indexPersonaEditada].sexo;
				this.personaEditable.mail = this.personas[this.indexPersonaEditada].mail;
				this.cambiarVista('editar');

			},
			guardarCambios(personaEditada) {
				this.personas.splice(this.indexPersonaEditada, 1, personaEditada);
				this.indexPersonaEditada = '';
				this.saveContactsToStorage();
			},
			quitarFavorito(personaAquitar) {
				this.indexPersonaEliminar = this.personas.indexOf(personaAquitar);
				this.personas[this.indexPersonaEliminar].favoritos = false;
				this.saveContactsToStorage();
			}
		},
		mounted(){
        this.getContactsFromStorage();
      }
	}
</script>