var vm=new Vue({
  el: '#app',
  data: {
    persona: {
    	nombre: '',
      apellido:'',
    	edad: '',
      telefono:'',
    	sexo: '',
      favs: false,
      index:'',
    },
    personaedit: {
      nombre: '',
      apellido:'',
      edad: '',
      telefono:'',
      sexo: '',
      favs: false,
      index:'',
    },
    edit:-1,
    personas: [],
    filtro: '',
    vista: 'ingresar',
    mensaje: false
  },
  computed: {
  	personasFiltradas() {
  		return this.personas.filter(p => p.nombre.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0 ||
      p.apellido.toLowerCase().indexOf(this.filtro.toLowerCase()) >=0 ||
      p.edad.toLowerCase().indexOf(this.filtro.toLowerCase()) >=0 ||
      p.telefono.toLowerCase().indexOf(this.filtro.toLowerCase()) >=0 ||
      p.sexo.toLowerCase().indexOf(this.filtro.toLowerCase()) >=0
      );
  	},
  	formOk() {
  		return this.persona.nombre && this.persona.apellido && this.persona.edad && this.persona.telefono && this.persona.sexo;
  	},

    esFav(index)
    {
      return this.personas[index].favs;
    },


    returnFavs()
    {
      return this.personas.filter(p => p.favs=true);
    }

  },
  methods: {
    vereditPersona(index){
      this.edit=index
      this.personaedit=this.personas[index]
    },
    canceleditPersona(){
      this.edit=-2;
    },
    editPersona(){
      for (var i = this.personas.length - 1; i >= 0; i--) {
        if(this.personas[i].index==this.edit)
        {
          this.personas[i]=this.personaedit;
        }
      }
      this.agregarPersonaLocalStorage();
      this.edit=-2
      
    },
  	agregarPersona() {
  		this.personas.push(Object.assign({}, this.persona));
      const indice=this.personas.length-1;
      if (indice!=0) {
        this.personas[indice].index=this.personas[indice].index+1;
      }
      else{
        this.personas[indice].index=0;
      }
      
      this.agregarPersonaLocalStorage();
  		this.limpiarPersona();
  		this.mensaje = true;
      this.cambiarVista("buscar");
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
      for (var i = this.personas.length - 1; i >= 0; i--) {
        if(this.personas[i].index==index)
        {
          this.personas[i].favs=true;
        }
      }
      this.agregarPersonaLocalStorage();
      this.mensaje=true;
    },

    eliminarFav(index)
    {
      for (var i = this.personas.length - 1; i >= 0; i--) {
        if(this.personas[i].index==index)
        {
          this.personas[i].favs=false;
        }
      }
      this.agregarPersonaLocalStorage();

    },

    agregarPersonaLocalStorage(){
      localStorage.setItem('personas',JSON.stringify(this.personas));
    },

    eliminarPersonaLocalStorage(posicion)
    {
      for (var i = this.personas.length - 1; i >= 0; i--) {
        if(this.personas[i].index==posicion){
          this.personas.splice(i,1);
        }
      }
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