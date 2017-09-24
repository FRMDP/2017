new Vue({
	el:'#app',
	data: {
		persona: {
			nombre:'',
			telefono:'',
			direccion:'',
			email:'',
			sexo:''
		},
		personas:[],
		filtro:'',
		vista:'agregar',
		mensaje:false
	},
	computed: {
		formOk() {
			return this.persona.nombre && this.persona.telefono && this.persona.direccion && this.persona.email && this.persona.sexo;
		},
		personasFiltradas() {
	  			return this.personas.filter(p => p.nombre.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0 ||
	  			p.telefono.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0 ||
	  			p.email.indexOf(this.filtro.toLowerCase()) >= 0 ||
	  			p.direccion.indexOf(this.filtro.toLowerCase()) >= 0 ||
	  			p.sexo.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0
	  			);
				},
	},
	methods: {
		agregarPersona() {
	       	this.personas.push(Object.assign({}, this.persona));
	       	let personasText = JSON.stringify(this.personas);
	       	localStorage.setItem("contactos", personasText);
	       	this.limpiarPersona(); 
			this.mensaje=true;
		},

		cargarPersona(person) {
	        this.persona.nombre = person.nombre;
	        this.persona.apellido = person.apellido;
	        this.persona.direccion = person.direccion;
	        this.persona.telefono = person.telefono;
	        this.persona.mail = person.mail;
	        this.persona.sexo = person.sexo;
	    },

		borrarPersona(index) {
	        this.personas.splice(index, 1);
	        localStorage.setItem("contactos", JSON.stringify(this.personas));
	    },

		limpiarPersona() {
			this.persona.nombre='';
			this.persona.telefono='';
			this.persona.direccion='';
			this.persona.email='';
		},

		cambiarVista(vista) {
			this.vista=vista;
			this.mensaje=false;
		},

		cerrarMensaje() {
			this.mensaje=false;
		},
		
	},
	mounted() { 
		this.personas = JSON.parse(localStorage.getItem("contactos"));
	}
})