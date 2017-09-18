new Vue({
      el: '#app',
      data: {
        persona: {
          nombre: '',
          apellido: '',
          edad: '',
          sexo: '',
          mail: ''
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
        formOk() {
          return this.persona.nombre && this.persona.edad
                 && this.persona.sexo && this.persona.apellido
                 && this.persona.mail;
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
        activarAlerta() {
          const alert = document.getElementById("alerta");
          alert.style.display = "block";
        },
        activarAlertaBorrado() {
          const alert = document.getElementById("deleteAlert");
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
        editarPersona(index){
          this.cambiarVista('editar');
          const person = this.personas[index];
          this.persona.nombre = person.nombre;
          this.persona.apellido = person.apellido;
          this.persona.edad = person.edad;
          this.persona.sexo = person.sexo;
          this.persona.mail = person.mail;
          this.index = index;
        },
        guardarCambios(){
          this.personas[this.index].nombre = this.persona.nombre;
          this.personas[this.index].apellido = this.persona.apellido;
          this.personas[this.index].edad = this.persona.edad;
          this.personas[this.index].sexo = this.persona.sexo;
          this.personas[this.index].mail = this.persona.mail;
          this.limpiarPersona();
          this.saveContactsToStorage();
        }
      },
      mounted(){
        this.getContactsFromStorage();
      }
    })