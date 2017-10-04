new Vue({
  el: '#app',
  data: {
    persona: {
    	nombre: '',
    	edad: '',
    	sexo: '',
      descripcion: '',
    },
    favorito: {
      nombre: '',
      edad: '',
      sexo: '',
      descripcion: '',
    },
    personas: [],
    favoritos: [],
    filtro: '',
    vista: 'ingresar',
    mensajePersonaAgregada: false,
    mensajeFavoritoAgregado: false,
    mensajeEditado: false,
    mensajeBorrado: false,
    index: null
  },
  computed: {
  	personasFiltradas() {
  		return this.personas.filter(p => p.nombre.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0 || p.edad.indexOf(this.filtro) >= 0);
  	},
    favoritosFiltrados() {
      return this.favoritos.filter(f => f.nombre.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0 || f.edad.indexOf(this.filtro) >= 0);
    },
  	formPeopleOk() {
      return this.persona.nombre && this.persona.edad && this.persona.sexo && this.persona.descripcion; 
    },
    formFavoriteOk(){
      return this.favorito.nombre && this.favorito.edad && this.favorito.sexo && this.favorito.descripcion;        
    }
  },
  methods: {
    //Agregacion y limpieza
  	agregarPersona() {
  		this.personas.push(Object.assign({}, this.persona));
  		this.limpiarPersona();
  		this.mensajePersonaAgregada = true;
      this.savePeopleStorage();
  	},
  	limpiarPersona() {
  		this.persona.nombre = '';
  		this.persona.edad = '';
  		this.persona.sexo = '';
      this.persona.descripcion = '';
      this.index = '';
  	},
    agregarFavorito(index) {
      const nuevoFavorito = this.personas.splice(index, 1);
      this.favoritos.push(nuevoFavorito[0]);
      this.mensajeFavoritoAgregado = true;
      this.saveFavoriteStorage();
    },
    //Cambio de vistas
  	cambiarVista(vista) {
  		this.vista = vista;
      this.limpiarPersona();
    },
    //Mensajes de aviso al usuario
  	cerrarMensajePersona() {
  		this.mensajePersonaAgregada = false;
  	},
    cerrarMensajeFavorito() {
      this.mensajeFavoritoAgregado = false;
    },
    cerrarMensajeEditado() {
      this.mensajeEditado = false;
    },
    cerrarMensajeBorrado() {
      this.mensajeBorrado = false;
    },
    //Borrado de listas
    deletePeople(index) {
      this.personas.splice(index,1);
      this.savePeopleStorage();
      this.mensajeBorrado = true;
    },
    deleteFavorite(index) {
      const backToContacts = this.favoritos.splice(index, 1);
      this.personas.push(backToContacts[0]);
      this.mensajeBorrado = true;
      this.savePeopleStorage();
      this.saveFavoriteStorage();
    },
    //Trayendo y guardando en localStorage
    savePeopleStorage()
    {
      localStorage.setItem('people',JSON.stringify(this.personas));
    },
    getPeopleStorage(){
      const people = localStorage.getItem('people');
      if(people)
      {
        this.personas = JSON.parse(people);
      }
    },
    saveFavoriteStorage()
    {
      localStorage.setItem('favorite',JSON.stringify(this.favoritos));
    },
    getFavoriteStorage(){
      const favorite = localStorage.getItem('favorite');
      if(favorite)
      {
        this.favoritos = JSON.parse(favorite);
      }
    },
    //Editado y guardado
    edit(index){
      if(this.vista == 'buscarPersonas'){
        this.cambiarVista('editPeople');
        const people = this.personas[index];
        this.persona.nombre = people.nombre;
        this.persona.edad = people.edad;
        this.persona.sexo = people.sexo;
        this.persona.descripcion = people.descripcion;
        this.index = index;
      }else{
        this.cambiarVista('editFavorite');
        const favorite = this.favoritos[index];
        this.favorito.nombre = favorite.nombre;
        this.favorito.edad = favorite.edad;
        this.favorito.sexo = favorite.sexo;
        this.favorito.descripcion = favorite.descripcion;
        this.index = index;
      }
    },
    saveEditing(){
      const index = this.index;
      if(this.vista == 'editPeople'){
        const persona = this.personas[index];
        this.personas[index].nombre = this.persona.nombre;
        this.personas[index].edad = this.persona.edad;
        this.personas[index].descripcion = this.persona.descripcion;
        this.personas[index].sexo = this.persona.sexo;
        this.mensajeEditado = true;
        this.cambiarVista('buscarPersonas');
        this.savePeopleStorage();
      }else{
        const favorito = this.favoritos[index];
        this.favoritos[index].nombre = this.favorito.nombre;
        this.favoritos[index].edad = this.favorito.edad;
        this.favoritos[index].descripcion = this.favorito.descripcion;
        this.favoritos[index].sexo = this.favorito.sexo;
        this.mensajeEditado = true;
        this.cambiarVista('buscarFavoritos');
        this.saveFavoriteStorage();
      }
    },
  },
  mounted(){
    this.getPeopleStorage();
    this.getFavoriteStorage();
  }
})
