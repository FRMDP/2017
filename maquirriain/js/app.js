new Vue({
  el: '#app',
  data: {
    persona: {
    	nombre: '',
    	edad: '',
    	sexo: '',
      descripcion: '',
      edit: false
    },
    personas: [],
    filtro: '',
    vista: 'ingresar',
    mensaje: false,
    index: null
    //people:{}
  },
  computed: {
  	personasFiltradas() {
  		return this.personas.filter(p => p.nombre.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0);
  	},
  	formOk() {
  		return this.persona.nombre && this.persona.edad && this.persona.sexo && this.persona.descripcion;
  	}
  },
  methods: {
  	agregarPersona() {
  		this.personas.push(Object.assign({}, this.persona));
  		this.limpiarPersona();
  		this.mensaje = true;
      this.savePeopleStorage();
  	},
  	limpiarPersona() {
  		this.persona.nombre = '';
  		this.persona.edad = '';
  		this.persona.sexo = '';
      this.persona.descripcion = '';
      this.index = '';
  	},
  	cambiarVista(vista) {
  		this.vista = vista;
  	},
  	cerrarMensaje() {
  		this.mensaje = false;
  	},
    deletePeople(index){
      this.personas.splice(index,1);
      this.removeStorage();
    },
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
    removeStorage()
    {
      localStorage.removeItem('people');
      this.savePeopleStorage();
    },
    saveEditing(){
      const index = this.index;
      const persona = this.personas[index];
      this.personas[index].nombre = this.persona.nombre;
      this.personas[index].edad = this.persona.edad;
      this.personas[index].descripcion = this.persona.descripcion;
      this.personas[index].sexo = this.persona.sexo;
      this.limpiarPersona();
      this.cambiarVista('buscar');
      this.removeStorage();
    },

    editPeople(index){
      this.cambiarVista('edit');
      const people = this.personas[index];
      this.persona.nombre = people.nombre;
      this.persona.edad = people.edad;
      this.persona.sexo = people.sexo;
      this.persona.descripcion = people.descripcion;
      this.index = index;
    }
  },
  mounted(){
    this.getPeopleStorage();
  }
})
