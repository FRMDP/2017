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
			favorito: null
		},
		personas : []
	},
	methods:{
		registrar: function(){
			const persona = Object.assign({}, this.persona);
			this.personas.push(persona);
			this.limpiarRegistro();
			this.mensaje = true;
			localStorage.setItem('personas', JSON.stringify(this.personas));
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

		},
		cerrarMensaje: function(){
			this.mensaje = false;
		},
		eliminarPersona: function(index){
			this.personas.pop(index);
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
			localStorage.removeItem('personas');
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