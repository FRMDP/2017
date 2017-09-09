new Vue({
  el: '#app',
  data: {
    persona: {
    	nombre: '',
      apellido: '',
    	edad: '',
      telefono: '',
    	sexo: '', 
      gustos: ''
    },
    personas: [],
    favoritos: [],
    filtro: '',
    vista: 'ingresar',
    mensaje: false
  },
  computed: {
  	personasFiltradas() {
  		return this.personas.filter(p => p.nombre.indexOf(this.filtro) >= 0 ||
        p.apellido.indexOf(this.filtro) >= 0 ||
        p.edad.indexOf(this.filtro) >= 0 ||
        p.telefono.indexOf(this.filtro) >= 0 ||
        p.sexo.indexOf(this.filtro) >= 0 ||
        p.gustos.indexOf(this.filtro) >= 0);
  	},
    favoritosFiltrados() {
      return this.favoritos.filter(f => f.nombre.indexOf(this.filtro) >= 0 ||
        f.apellido.indexOf(this.filtro) >= 0 ||
        f.edad.indexOf(this.filtro) >= 0 ||
        f.telefono.indexOf(this.filtro) >= 0 ||
        f.sexo.indexOf(this.filtro) >= 0 ||
        f.gustos.indexOf(this.filtro) >= 0);
    },
  	formOk() {
  		return this.persona.nombre && this.persona.apellido && this.persona.edad 
        && this.persona.telefono && this.persona.sexo && this.persona.gustos;
  	}
  },
  methods: {
  	agregarPersona() {
  		this.personas.push(Object.assign({}, this.persona));
  		this.limpiarPersona();
  		this.mensaje = true;
  	},
    agregarAfavoritos(index) {
      const nuevoFavorito = this.personas.splice(index, 1);
      this.favoritos.push(nuevoFavorito[0]);
    },
    eliminarPersona(index) {
      this.personas.splice(index, 1);
    },
    eliminarFavorito(index) {
      const vuelveAcontactos = this.favoritos.splice(index, 1);
      this.personas.push(vuelveAcontactos[0]);
    },
  	limpiarPersona() {
  		this.persona.nombre = '';
      this.persona.apellido = '';
  		this.persona.edad = '';
      this.persona.telefono = '';
  		this.persona.sexo = '';
      this.persona.gustos = '';
  	},
  	cambiarVista(vista) {
  		this.vista = vista;
  	},
  	cerrarMensaje() {
  		this.mensaje = false;
  	}
  }
})