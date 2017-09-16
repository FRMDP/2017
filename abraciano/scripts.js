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
  	  		let favs = 0;
  	  		this.personas.forEach(p => { if(p.esFavorito) favs++;});
  	  		return favs;
  	  	},
  	  	wrongNumber() {
  	  		if((this.isNumeric(this.persona.edad) === false || this.persona.edad < 1 || this.persona.edad > 100) && (this.persona.edad != ""))
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
		},
		isNumeric(n) {
			return !isNaN(parseFloat(n)) && isFinite(n);
		},
	},
	mounted() {
		this.traerPersonasStorage();
	}
})