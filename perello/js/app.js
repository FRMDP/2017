new Vue({
  el: '#app',
  data: {
    persona: {
    	nombre: '',
      apellido: '',
    	edad: '',
      favorito: false,
    	sexo: ''
    },
    personas: [],
    filtro: '',
    vista: 'inicio',
    mensaje: false
  },
  computed: {
  	personasFiltradas() {
  		return this.personas.filter(p => p.nombre.toLowerCase().indexOf(this.filtro) >= 0||
                                      p.apellido.toLowerCase().indexOf(this.filtro) >= 0||
                                      p.edad.toLowerCase().indexOf(this.filtro) >= 0||
                                      p.sexo.toLowerCase().indexOf(this.filtro) >= 0 );
  	},

    personasFavoritas(){
      return this.personas.filter(p => p.favorito=true);
    },

  	formOk() {
  		return this.persona.nombre && this.persona.apellido && this.persona.edad && this.persona.sexo;
  	}
  },
  methods: {
  	agregarPersona:function() {
  		this.personas.push(Object.assign({}, this.persona));
  		this.limpiarPersona();
  		this.mensaje = true;
      this.agregarContactoLocalStorage(this.personas);
  	},
  	limpiarPersona:function() {
  		this.persona.nombre = '';
      this.persona.apellido='';
  		this.persona.edad = '';
  		this.persona.sexo = '';
  	},
    agregarFavorito:function(index) {
      this.personas[index].favorito=true;
      this.agregarContactoLocalStorage(this.personas[index]);
    },
    eliminarFavorito:function(index){
      this.personas[index].favorito=false;
      this.agregarContactoLocalStorage(this.personas[index]);
    },
  	cambiarVista:function(vista) {
  		this.vista = vista;
      this.cerrarMensaje();
  	},
  	cerrarMensaje:function() {
  		this.mensaje = false;
  	},
    traerContactos:function(){
      const agendaCompleta =localStorage.getItem('personas');
      if(agendaCompleta){
        this.personas = JSON.parse(agendaCompleta);
      }
    },
    agregarContactoLocalStorage:function(persona){
      localStorage.setItem('personas', JSON.stringify(persona));
    },
    eliminarPersona:function (index){
      this.personas.splice(index,1);
      this.agregarContactoLocalStorage();
    }
  },
  mounted(){
    this.traerContactos();
  }
})