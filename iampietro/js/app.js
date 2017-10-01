new Vue({
      el: '#app',
      data: {
        persona: {
          nombre: '',
          apellido: '',
          edad: '',
          sexo: '',
          mail: '',
          favorito: 'false'
        },
        personas: [],
        filtro: '',
        vista: 'ingresar',
        index: 0,
        indexPersonaSeleccionada: ''
      },
      computed: {
        personasFiltradas() {
          return this.personas.filter(p => (p.apellido.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0 ||
                                            p.edad.indexOf(this.filtro) >= 0 ||
                                            p.nombre.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0)
          );
        },
        favoritosFiltrados() {
          return this.personas.filter(p => (p.favorito=='true' &&(p.apellido.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0 ||
                                            p.edad.indexOf(this.filtro) >= 0 ||
                                            p.nombre.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0)));
        },
        formOk() {
          return this.persona.nombre && this.persona.edad
                 && this.persona.sexo && this.persona.apellido
                 && this.persona.mail;
        },
        busquedaSinResultados() {
          return this.personasFiltradas.length == 0 &&

                 this.filtro != '';
        }
      },
      methods: {
        agregarPersona() {
          this.personas.push(Object.assign({}, this.persona));  // a un objeto vacio, le paso todo lo q hay en persona
          this.limpiarPersona();
          this.activarAlerta();
          this.saveContactsToStorage();
        },
        limpiarPersona() {
          this.persona.nombre = '';
          this.persona.apellido = '';
          this.persona.edad = '';
          this.persona.sexo = '';
          this.persona.mail = '';
        },
        cambiarVista(vista) {
          this.vista = vista;
          this.limpiarPersona();
        },
        borrarPersona(persona) {
          this.indexPersonaSeleccionada = this.personas.indexOf(persona);
          this.personas.splice(this.indexPersonaSeleccionada, 1);
          this.saveContactsToStorage();
          this.indexPersonaSeleccionada = '';
          this.activarAlertaBorrado();
        },
        editarPersona(persona){
          this.cambiarVista('editar');
          this.indexPersonaSeleccionada = this.personas.indexOf(persona);
          const person = this.personas[this.indexPersonaSeleccionada];
          this.persona.nombre = person.nombre;
          this.persona.apellido = person.apellido;
          this.persona.edad = person.edad;
          this.persona.sexo = person.sexo;
          this.persona.mail = person.mail;
          this.index = this.indexPersonaSeleccionada;
          this.indexPersonaSeleccionada = '';
        },
        activarAlerta() {
          const alert = document.getElementById("alerta");
          alert.style.display = "block";
        },
        activarAlertaBorrado() {
          const alert = document.getElementById("deleteAlert");
          alert.style.display = "block";
        },
        activarAlertaEditado() {
          const alert = document.getElementById("editAlert");
          alert.style.display = "block";
        },
        activarFavoritoQuitado() {
          const alert = document.getElementById("favouriteAlert");
          alert.style.display = "block";
        },
        activarFavoritoAgregado() {
          const alert = document.getElementById("favouriteAddAlert");
          alert.style.display = "block";
        },
        activarFavoritoExistente() {
          const alert = document.getElementById("favouriteExistente");
          alert.style.display = "block";
        },
        saveContactsToStorage(){
          localStorage.setItem('personas',JSON.stringify(this.personas));
        },
        getContactsFromStorage(){
          const contactos = localStorage.getItem('personas');
          if (contactos) {
            this.personas = JSON.parse(contactos);
          }
        },
        guardarCambios(){
          this.personas[this.index].nombre = this.persona.nombre;
          this.personas[this.index].apellido = this.persona.apellido;
          this.personas[this.index].edad = this.persona.edad;
          this.personas[this.index].sexo = this.persona.sexo;
          this.personas[this.index].mail = this.persona.mail;
          this.limpiarPersona();
          this.activarAlertaEditado();
          this.saveContactsToStorage();
        },
        agregarFavorito(persona){
          if(this.personas[this.personas.indexOf(persona)].favorito == 'true')
          {
          this.activarFavoritoExistente();
          }
          else {
              this.personas[this.personas.indexOf(persona)].favorito = 'true';
              this.activarFavoritoAgregado();
              this.saveContactsToStorage();
          }
        },
        quitarFavorito(persona){
          this.personas[this.personas.indexOf(persona)].favorito = 'false';
          this.activarFavoritoQuitado();
          this.saveContactsToStorage();
        }
      },
      mounted(){
        this.getContactsFromStorage();
      }
    })
