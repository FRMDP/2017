new Vue({
	el: '#app',
	data: {
		persona: {
			nombre: '',
			edad: '',
			telefono: '',
			sexo: '',
			esFavorito: false,
		},
		personas: [],
		filtro: '',
		vista: "ingresar",
		alertIngreso: false, //para mostrar o no mostrar el Alert de ingreso
		alertError: false,
		indice: ''
	},
	computed: {
		formOk(){
			return this.persona.nombre && this.persona.edad && this.persona.sexo && this.persona.telefono && !this.alertError;
		},
		personasFiltradas() {
  	  		return this.personas.filter(p => p.nombre.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0 ||
  	  			p.telefono.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0 ||
  	  			p.edad.indexOf(this.filtro.toLowerCase()) >= 0 ||
  	  			p.sexo.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0
  	  			);
  	  	},
  	  	placeholder() { //lo que se va a mostrar en el placeholder de Busqueda
  	  		return "Buscar en " + this.vista;
  	  	},
  	  	hayFavoritos() {  //para el v-show de la vista Favoritos
  	  		return this.personas.reduce((sum, next) => sum || next.esFavorito, false);
  	  	},
  	  	wrongNumber() {
  	  		if((this.isNumeric(this.persona.edad) === false || this.persona.edad < 1 || this.persona.edad > 125) && (this.persona.edad != ""))
				this.alertError = true;
			else
				this.alertError = false;
  	  	}
	},
	methods: {
		agregarPersona() {
			this.personas.push(Object.assign({}, this.persona));
			this.limpiarPersona();
			this.guardarPersonasStorage();
			this.alertIngreso = true;
		},
		borrarPersona(index) {
			this.personas.splice(index, 1);
			this.guardarPersonasStorage();
		},
		limpiarPersona() {
			this.persona.nombre = '';
			this.persona.edad = '';
			this.persona.sexo = '';
			this.persona.telefono = '';
		},
		//
		guardarPersonasStorage() {
			localStorage.setItem('personas', JSON.stringify(this.personas));
		},
		traerPersonasStorage() {
			const contactos = localStorage.getItem('personas');
			if(contactos) {
				this.personas = JSON.parse(contactos);
			}
		},
		//
		agregarFavorito(index) {
			this.personas[index].esFavorito = true;
			this.guardarPersonasStorage();
		},
		eliminarFavorito(index) {
			this.personas[index].esFavorito = false;
			this.guardarPersonasStorage();
		},
		cambiarVista(vista) {
			this.vista = vista;
			this.limpiarPersona();
		},
		isNumeric(n) {
			return !isNaN(parseFloat(n)) && isFinite(n);
		},
		cerrarEdicion() {
      this.alertIngreso = false
      this.cambiarVista('todos los contactos');

    },
		parametrosEditar(vista, indice) {
      this.cambiarVista(vista);
      this.indi = indice;
      this.persona.nombre = this.personas[indice].nombre;
      this.persona.edad = this.personas[indice].edad;
			this.persona.telefono = this.personas[indice].telefono;
      this.persona.sexo = this.personas[indice].sexo;
    },
    editarPersona() {
      this.personas[this.indi].nombre = this.persona.nombre;
      this.personas[this.indi].edad = this.persona.edad;
			this.personas[this.indi].telefono = this.persona.telefono;
      this.personas[this.indi].sexo = this.persona.sexo;
      this.guardarPersonasStorage()
      this.limpiarPersona();
      this.mensaje = true;
      this.indi = '';
			this.alertIngreso = true;
    }
	},
	mounted() {
		this.traerPersonasStorage();
	}
})
