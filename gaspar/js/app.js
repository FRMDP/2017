new Vue({
  el: '#app',
  data: {
    persona: {
      nombre: '',
      apellido:'',
      edad: '',
      sexo: '',
      telefono:'',
      direccion:''
    },
    personas: [],
    filtro: '',
    vista: 'ingresar',
    mensaje: false,
    indi:''
  },
  computed: {
    personasFiltradas() {
      return this.personas.filter(p => p.nombre.search(new RegExp(this.filtro, "i")) >= 0 || p.apellido.search(new RegExp(this.filtro, "i")) >= 0 || p.edad.search(new RegExp(this.filtro, "i")) >= 0 || p.telefono.search(new RegExp(this.filtro, "i")) >= 0 || p.direccion.search(new RegExp(this.filtro, "i")) >= 0 || p.sexo.search(new RegExp(this.filtro, "i")) >= 0);
    },
    formOk() {
      return this.persona.nombre && this.persona.edad && this.persona.sexo && this.persona.telefono && this.persona.direccion;
    }
  },
  methods: {
    agregarPersona() {
      this.personas.push(Object.assign({}, this.persona));
      this.limpiarPersona();
      this.mensaje = true;
      this.agregarLista_localStorage(this.personas);
    },
    limpiarPersona() {
      this.persona.nombre = '';
      this.persona.apellido = '';
      this.persona.edad = '';
      this.persona.sexo = '';
      this.persona.telefono = '';
      this.persona.direccion = '';
    },
    eliminarPersona(id){
      this.personas.splice(id, 1);
      this.agregarLista_localStorage(this.personas);
    },
    cambiarVista(vista) {
      this.vista = vista;
      this.limpiarPersona();
    },
    cerrarMensaje() {
      this.mensaje = false;
    },
    cerrarEdicion(){
      this.mensaje = false;
      this.cambiarVista('buscar');
    },
    manejarEdicion(vista,indice){
      this.cambiarVista(vista);
      this.indi=indice;
      this.persona.nombre = this.personas[indice].nombre;
      this.persona.apellido = this.personas[indice].apellido;
      this.persona.edad = this.personas[indice].edad;
      this.persona.sexo = this.personas[indice].sexo;
      this.persona.telefono = this.personas[indice].telefono;
      this.persona.direccion = this.personas[indice].direccion;
    },

    editarPersona(){
      this.personas[this.indi].nombre=this.persona.nombre;
      this.personas[this.indi].apellido=this.persona.apellido;
      this.personas[this.indi].edad=this.persona.edad;
      this.personas[this.indi].sexo=this.persona.sexo;
      this.personas[this.indi].telefono=this.persona.telefono;
      this.personas[this.indi].direccion=this.persona.direccion;
      this.limpiarPersona();
      this.mensaje = true;
      this.indi='';
      this.agregarLista_localStorage(this.personas);
    },

    agregarLista_localStorage(lista){
      localStorage.setItem('personaList', JSON.stringify(lista));
    }

  },

  mounted:function(){
    let storeLista = localStorage.getItem('personaList');
    if(storeLista != null){
      this.personas = JSON.parse(storeLista);
    }
  }
})
