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
    vista: 'buscar',
    mensaje: false
  },
  computed: {
  	personasFiltradas() {
  		return this.personas.filter(p => p.nombre.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0);
  	},
  	formOk() {
  		return this.persona.nombre && this.persona.apellido && this.persona.edad && this.persona.telefono && this.persona.sexo;
  	}
  },
  methods: {
  	agregarPersona() {
  		this.personas.push(Object.assign({}, this.persona));
      this.agregarPersonaLocalStorage();
  		this.limpiarPersona();
  		this.mensaje = true;
  	},
  	limpiarPersona() {
  		this.persona.nombre = '';
  		this.persona.edad = '';
  		this.persona.sexo = '';
      this.persona.apellido='';
      this.persona.telefono=''
  	},
  	cambiarVista(vista) {
  		this.vista = vista;
  	},
  	cerrarMensaje() {
  		this.mensaje = false;
  	},

    agregarPersonaLocalStorage(){
      localStorage.setItem('personas',JSON.stringify(this.personas));
    },

    eliminarPersonaLocalStorage(posicion)
    {
      this.personas.splice(posicion,1);
      this.agregarPersonaLocalStorage();
    },

    traerPersonasLocalStorage(){
      const personasLocalStorage=localStorage.getItem('personas');

      if(personasLocalStorage){
        this.personas=JSON.parse(personasLocalStorage);
      }
    },

    mounted()
    {
      this.traerPersonasLocalStorage();
    },
  }

})