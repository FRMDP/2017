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
    indi:'',
    publicacion: {
      id: '',
      persona: null,
      nota: '',
      mg: 0,
      me: 0
    },
    publicaciones: []
  },
  computed: {
    personasFiltradas() {
      return this.personas.filter(p => p.nombre.search(new RegExp(this.filtro, "i")) >= 0 || p.apellido.search(new RegExp(this.filtro, "i")) >= 0 || p.edad.search(new RegExp(this.filtro, "i")) >= 0 || p.telefono.search(new RegExp(this.filtro, "i")) >= 0 || p.direccion.search(new RegExp(this.filtro, "i")) >= 0 || p.sexo.search(new RegExp(this.filtro, "i")) >= 0);
    },
    formOk() {
      return this.persona.nombre && this.persona.edad && this.persona.sexo && this.persona.telefono && this.persona.direccion;
    }/*,
    formOkp() {
      return this.publicacion.persona && this.publicacion.nota;
    }*/
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
    },
    agregarPublicacion(){
      if(!this.publicaciones.length){
        this.publicacion.id = 0;
      } else {
        let indice = this.publicaciones.length;
        this.publicacion.id = this.publicaciones[indice - 1].id +1;
      }
      this.publicaciones.push(Object.assign({}, this.publicacion));
      this.limpiarPublicacion();
      localStorage.setItem('publicacionesList', JSON.stringify(this.publicaciones));
      console.log(this.publicaciones);
    },
    limpiarPublicacion(){
      this.publicacion.id = '';
      this.publicacion.persona = '';
      this.publicacion.nota = '';
    },
    meGusta(id){
      this.publicaciones[id].mg++;
    },
    meEnfada(id){
      this.publicaciones[id].me++;
    }
  },

  mounted:function(){
    let storeLista = localStorage.getItem('personaList');
    if(storeLista != null){
      this.personas = JSON.parse(storeLista);
    }

    let storeListaPublicaciones = localStorage.getItem('publicacionesList');
    if(storeListaPublicaciones != null){
      this.publicaciones = JSON.parse(storeListaPublicaciones);
    }
  }
})