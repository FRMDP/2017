Vue.config.devtools = true
const app = new Vue({
	el: '#app',
	data: {
		vista    : 'registro',
		busqueda : '',
		mensaje  : false,
		persona  : {
			nombre  : '',
			apellido: '',
			email   : '',
			telefono: '',
			genero  : '',
			favorito: false
		},
		personas : [],
		indexPersonaSeleccionada: '',
		index: ''
	},
	methods:{
		registrar: function(){
			const persona = Object.assign({}, this.persona);
			this.personas.push(persona);
			this.limpiarRegistro();
			this.mensaje = true;
			this.guardarContactosEnStorage();
		},
		limpiarRegistro: function(){
			this.persona.nombre   = '';
			this.persona.apellido = '';
			this.persona.genero   = '';
			this.persona.email    = '';
			this.persona.telefono = '';
		},
		cambiarVista: function(vista){
			this.vista = vista;
			this.cerrarMensaje();
			this.limpiarRegistro();
		},
		cerrarMensaje: function(){
			this.mensaje = false;
		},
		eliminarPersona: function(index){
			this.personas.pop(index);
			this.guardarContactosEnStorage();
		},
		getPersonasLocalStorage: function(){
			const personas = localStorage.getItem('personas');
			if(personas){
				this.personas = JSON.parse(personas);
			}
		},
		agregarOquitarFavorito: function(index){
			if(this.personas[index].favorito)
				this.personas[index].favorito = false;
			else
				this.personas[index].favorito = true;
			this.guardarContactosEnStorage();
		},
		editarPersona: function(persona){
			this.cambiarVista('editar');
			this.indexPersonaSeleccionada = this.personas.indexOf(persona);
			const person = this.personas[this.indexPersonaSeleccionada];
          	this.persona.nombre = person.nombre;
          	this.persona.apellido = person.apellido;
          	this.persona.genero = person.genero;
          	this.persona.email = person.email;
          	this.persona.telefono = person.telefono;
          	this.index = this.indexPersonaSeleccionada;
          	this.indexPersonaSeleccionada = '';
		},
		salvarCambios: function(){
			this.personas[this.index].nombre = this.persona.nombre;
          	this.personas[this.index].apellido = this.persona.apellido;
          	this.personas[this.index].genero = this.persona.genero;
          	this.personas[this.index].email = this.persona.email;
          	this.personas[this.index].telefono = this.persona.telefono;
          	this.guardarContactosEnStorage();
          	this.mensaje = true;
		},
		guardarContactosEnStorage: function(){
			localStorage.setItem('personas', JSON.stringify(this.personas));
		}
	},
	computed: {
		personasFiltradas() {
			//La función filter es case sensitive
	  		return this.personas.filter(p => p.nombre.toLowerCase().indexOf(this.busqueda.toLowerCase()) >= 0 ||
	  		                            p.apellido.toLowerCase().indexOf(this.busqueda.toLowerCase())    >= 0 ||
	  		                            p.telefono.toLowerCase().indexOf(this.busqueda.toLowerCase())    >= 0 ||
	  		                            p.email.toLowerCase().indexOf(this.busqueda.toLowerCase())       >= 0 );
  		},
  		personasFavoritas(){
			return this.personas.filter(p =>  p.favorito == true);
		}
	},
	mounted: function() {
		this.getPersonasLocalStorage();
	}
})