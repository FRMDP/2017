new Vue({
  el: '#app',
  data: {
    persona: {
    	nombre: '',
      apellido:'',
    	edad: '',
      telefono:'',
    	sexo: ''
    },
    personas: [],
    filtro: '',
    vista: 'ingresar',
    mensaje: false
  },
  computed: {
  	personasFiltradas() {
  		return this.personas.filter(p => p.nombre.toUpperCase().indexOf(this.filtro.toUpperCase()) >= 0);
  	},
  	formOk() {
  		return this.persona.nombre && this.persona.apellido && this.persona.edad && this.persona.telefono && this.persona.sexo;
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
      this.persona.apellido='';
      this.persona.telefono=';'
  	},
  	cambiarVista(vista) {
  		this.vista = vista;
  	},
  	cerrarMensaje() {
  		this.mensaje = false;
  	}
  }
})