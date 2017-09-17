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
  },
  computed: {
  	personasFiltradas() {
  		return this.personas.filter(p => p.nombre.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0 ||
        p.apellido.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0 ||
        p.edad.indexOf(this.filtro) >= 0 ||
        p.telefono.indexOf(this.filtro) >= 0 ||
        p.sexo.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0 ||
        p.gustos.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0);
  	},
    favoritosFiltrados() {
      return this.favoritos.filter(f => f.nombre.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0 ||
        f.apellido.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0 ||
        f.edad.indexOf(this.filtro) >= 0 ||
        f.telefono.indexOf(this.filtro) >= 0 ||
        f.sexo.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0 ||
        f.gustos.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0);
    },
  	formOk() {
  		return this.persona.nombre && this.persona.apellido && this.persona.edad 
        && this.persona.telefono && this.persona.sexo && this.persona.gustos;
  	}
  },
  methods: {
    //Personas
  	agregarPersona() {
  		this.personas.push(Object.assign({}, this.persona));
  		this.limpiarPersona();
      this.agregarPersonaALocalStorage();
  	},
    agregarPersonaALocalStorage(){
      localStorage.setItem('personas', JSON.stringify(this.personas));
    },
    traerPersonasDeLocalStorage(){
      const personas = localStorage.getItem('personas');
      if(personas){
        this.personas = JSON.parse(personas)
      }
    },
    //Favoritos
    agregarAfavoritos(index) {
      const nuevoFavorito = this.personas.splice(index, 1);
      this.favoritos.push(nuevoFavorito[0]);
      this.actualizarPersonasYFavoritos();
    },
    agregarFavoritoALocalStorage(){
      localStorage.setItem('favoritos', JSON.stringify(this.favoritos));
    },
    traerFavoritosDeLocalStorage(){
      const favoritos = localStorage.getItem('favoritos');
      if(favoritos){
        this.favoritos = JSON.parse(favoritos)
      }
    },
    //Eliminacion de ambos
    eliminarPersona(index) {
      this.personas.splice(index, 1);
      this.agregarPersonaALocalStorage();
    },
    eliminarFavorito(index) {
      const vuelveAcontactos = this.favoritos.splice(index, 1);
      this.personas.push(vuelveAcontactos[0]);
      this.actualizarPersonasYFavoritos();
    },
    //Limpia los campos de texto luego de ingresar la persona
  	limpiarPersona() {
  		this.persona.nombre = '';
      this.persona.apellido = '';
  		this.persona.edad = '';
      this.persona.telefono = '';
  		this.persona.sexo = '';
      this.persona.gustos = '';
  	},
    //Se mueve entre las diferentes vistas
  	cambiarVista(vista) {
  		this.vista = vista;
  	},
    actualizarPersonasYFavoritos(){
      this.agregarPersonaALocalStorage();
      this.agregarFavoritoALocalStorage();
    }
  },
  mounted() {
    this.traerFavoritosDeLocalStorage();
    this.traerPersonasDeLocalStorage();
  }
})