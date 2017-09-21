const STORAGE_KEY = 'personas-storage';
var app = new Vue({
  	  el: '#app',
  	  data: {
  	    persona: {
  	    	nombre: '',
          apellido:'',
  	    	telefono: '',
          mail:'',
          genero:'',
          grupo:''
  	    },
  	    personas: [],
  	    filtro: '',
  	    vista: 'ingresar',
  	    mensaje: false,
        editedPersona: null,
        dismissSecs: 2,
        dismissCountDown: 0,
        showDismissibleAlert: false
  	  },
  	  computed: {
  	  	personasFiltradas() {
          return this.personas.filter(p => p.nombre.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0 ||
            p.apellido.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0 ||
            p.telefono.indexOf(this.filtro) >= 0 ||
            p.mail.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0 ||
            p.grupo.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0 ||
            p.genero.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0);
        
  	  	},
  	  	formOk() {
  	  		return this.persona.nombre 
          && this.persona.apellido 
          && this.persona.telefono
          && this.persona.genero;
  	  	}
  	  },

      created(){
        this.personas = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      },


  	  methods: {
  	  	agregarPersona() {
  	  		this.personas.push(Object.assign({}, this.persona));
  	  		this.limpiarPersona();
  	  		this.mensaje = true;
          localStorage.setItem(STORAGE_KEY, JSON.stringify(this.personas));

  	  	},
  	  	limpiarPersona() {
  	  		this.persona.nombre = '';
          this.persona.apellido = '';
  	  		this.persona.telefono = '';
          this.persona.mail = '';
          this.persona.genero = '';
          this.persona.grupo='';
  	  	},
  	  	cambiarVista(vista) {
  	  		this.vista = vista;
  	  	},
  	  	cerrarMensaje() {
  	  		this.mensaje = false;
  	  	},

        eliminarPersona: function(persona) {
          this.personas.splice(this.personas.indexOf(persona), 1);
          localStorage.setItem(STORAGE_KEY, JSON.stringify(this.personas));
          
        },

        editPersona: function(persona){
          this.editedPersona = persona;
          localStorage.setItem(STORAGE_KEY, JSON.stringify(this.personas));
        },

        doneEdit: function(persona){
          debugger;
          if(!this.editedPersona){
            return
          }
          this.editedPersona = null;
          persona.nombre = persona.nombre.trim();
          persona.apellido = persona.apellido.trim();
          persona.telefono = persona.telefono.trim();
          persona.correo = persona.correo.trim();
          persona.grupo = persona.grupo;
          if(!persona.nombre || !persona.apellido || !persona.telefono 
            || !persona.correo || !persona.grupo){
            this.eliminarPersona(persona);
          }
          localStorage.setItem(STORAGE_KEY, JSON.stringify(this.personas));
        },

        
        countDownChanged(dismissCountDown) {
          this.dismissCountDown = dismissCountDown;
        },
        showAlert() {
          this.dismissCountDown = this.dismissSecs;
        }
    }
  })