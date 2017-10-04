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

  	formOk() {
  		return this.persona.nombre && this.persona.apellido && this.persona.edad && this.persona.sexo;
  	}
  },
  methods: {
  	agregarPersona:function() {
  		this.personas.push(Object.assign({}, this.persona));
  		this.limpiarPersona();
  		this.mensaje = true;
      this.agregarContactoLocalStorage();
  	},
  	limpiarPersona:function() {
  		this.persona.nombre = '';
      this.persona.apellido='';
  		this.persona.edad = '';
  		this.persona.sexo = '';
  	},
    agregarFavorito:function(index) {
      this.personas[index].favorito=true;
      this.agregarContactoLocalStorage();
    },
    eliminarFavorito:function(index){
      this.personas[index].favorito=false;
      this.agregarContactoLocalStorage();
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
    agregarContactoLocalStorage:function(){
      localStorage.setItem('personas', JSON.stringify(this.personas));
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