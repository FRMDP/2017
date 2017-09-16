new Vue({
  el: '#app',
  data: {
    persona: {
    	nombre: '',
    	edad: '',
    	sexo: ''
    },
    personas: [],
    filtro: '',
    vista: 'ingresar',
    mensaje: false
  },
  computed: {
  	personasFiltradas() {
  		return this.personas.filter(p => p.nombre.indexOf(this.filtro) >= 0);
  	},
  	formOk() {
  		return this.persona.nombre && this.persona.edad && this.persona.sexo;
  	}
  },
  methods: {
  	agregarPersona() {
  		this.personas.push(Object.assign({}, this.persona));
  		this.limpiarPersona();
  		this.mensaje = true;
  	},
  	limpiarPersona() {
  		this.persona.nombre = '';
  		this.persona.edad = '';
  		this.persona.sexo = '';
  	},
  	cambiarVista(vista) {
  		this.vista = vista;
  	},
  	cerrarMensaje() {
  		this.mensaje = false;
  	}
  }
})