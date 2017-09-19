
        new Vue({
          el: '#nose',
          data: {
            persona: {
              id: '',
              nombre: '',
              apellido: '',
              edad: '',
              direccion: '',
              sexo: ''
            },
            personas: [],
            denuncia: {
              id_persona: '', //(a denunciar)
              motivo: '',
              descripcion: ''
            },
            denuncias: [],
            filtro: '',
            vista: 'ingresar',
            mensaje: false,
            mensaje2: false,
            denunciando: false
          },
          computed: {
            formOk() {
              return this.persona.nombre && this.persona.apellido && this.persona.edad && this.persona.direccion &&  this.persona.sexo;
            },
            formOk2() {
              return this.denuncia.motivo;
            },
            personasFiltradas() {
              return this.personas.filter(p => (p.nombre.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0 || 
                p.apellido.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0 ||
                p.edad.indexOf(this.filtro) >= 0 ||
                p.direccion.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0));
            }
          },
          methods: {
            addPersona() {
              this.persona.id = this.personas.length;
              this.personas.push(Object.assign({}, this.persona));
              this.cleanFormulario();
              localStorage.setItem('personas', JSON.stringify(this.personas));
              this.mensaje = true;
              setTimeout(this.mensaje_false, 4000);
            },
            cleanFormulario() {
              this.persona.nombre = '';
              this.persona.apellido = '';
              this.persona.edad = '';
              this.persona.direccion = '';
              this.persona.fecha_nac = '';
              this.persona.sexo = '';
            },
            cleanFormulario2() { //todo lo que sea 2 es para la denuncia
              this.denuncia.id_persona = '';
              this.denuncia.motivo = '';
              this.denuncia.descripcion = '';
            },
            cambiarVista(vista) {
              this.vista = vista;
            },
            mensaje_false() { 
              this.mensaje = false; 
            },
            mensaje_false2() { 
              this.mensaje2 = false; 
            },
            eliminarPersona(persona_a_borrar) {
              pos = 0;
              while(this.personas[pos].id != persona_a_borrar.id) 
                pos++;
              this.personas.splice(pos, 1);
              localStorage.setItem('personas', JSON.stringify(this.personas));
            },
            contarDenuncias(personita) {
              cant = 0;
              for (let i = 0; this.denuncias.length > i; i++) {
                if(this.denuncias[i].id_persona == personita.id) 
                  cant++;
              }
              return cant;
            },
            denunciarPersona(persona_a_denunciar) {
              this.denuncia.id_persona = persona_a_denunciar.id;
              this.persona.nombre = persona_a_denunciar.nombre;
              this.persona.apellido = persona_a_denunciar.apellido;
              this.denunciando = true;
              this.vista = 'denuncias';
            },
            denunciarPersonaII(){
              this.denuncias.push(Object.assign({}, this.denuncia));
              this.cleanFormulario2();
              localStorage.setItem('denuncias', JSON.stringify(this.denuncias));
              this.denunciando = false;
              /*this.mensaje2 = true;
              setTimeout(this.mensaje_false2, 4000);*/
            },
            getNombre(id){
              for (let i = 0; this.personas.length > i; i++) {
                if(this.personas[i].id == id) {
                  return this.personas[i].nombre + " " + this.personas[i].apellido;
                }
              }
            },
            mounted(){
              const personas = localStorage.getItem('personas');
              if(!personas){
                this.personas = JSON.parse(personas)
              }

              const denuncias = localStorage.getItem('denuncias');
              if(!denuncias){
                this.denuncias = JSON.parse(denuncias)
              }
            }
          }
        })
