new Vue({
  el: '#app',
  data: {
    persona: {
    	nombre: '',
      apellido:'',
    	edad: '',
      telefono:'',
    	sexo: '',
      favs: false,
    },
    personas: [],
    filtro: '',
    vista: 'ingresar',
    mensaje: false
  },
  computed: {
  	personasFiltradas() {
  		return this.personas.filter(p => p.nombre.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0);
  	},
  	formOk() {
  		return this.persona.nombre && this.persona.apellido && this.persona.edad && this.persona.telefono && this.persona.sexo;
  	},

    returnFavs()
    {
      return this.personas.filter(p => p.favs=true);
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
  	cambiarVista: function(vista) {
  		this.vista = vista;
  	},
  	cerrarMensaje() {
  		this.mensaje = false;
  	},

    hacerFavorito(index) {
      this.personas[index].favs=true;
      this.agregarPersonaLocalStorage();
    },

    eliminarFav(index)
    {
      this.personas[index].favs=false;
      this.agregarPersonaLocalStorage();

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
  },

    mounted()
    {
      this.traerPersonasLocalStorage();
    },

})