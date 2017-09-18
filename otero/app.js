var vm= new Vue({
  el: '#app',
  data: {
    persona: {
    	nombre: '',
    	telefono: '',
    	sexo: '',
      mail:'',
    },
    personas:[],
    filtro: '',
    vista: 'ingresar',
    boleanmensaje: false,
    fuerte:'',
    mensaje:'',
    tipomensaje:'',
    importacion:'reemplazar',
  },
  computed: {
  	personasFiltradas() {
  		return this.personas.filter(persona => persona.nombre.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0|| persona.sexo.indexOf(this.filtro) >= 0||persona.telefono == this.filtro ||persona.mail.indexOf(this.filtro) >= 0);
  	},
    contenidoAexportar(){
      return JSON.stringify(this.personas)
    },
    nombreOK(){
      return this.persona.nombre && isNaN(this.persona.nombre) && this.persona.nombre.length >=3
    },
    telefonoOk(){
      return this.persona.telefono  && !isNaN(this.persona.telefono) && this.persona.telefono>99
    },
    mailOk(){
      const expresion= /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      return this.persona.mail && expresion.test(this.persona.mail)
    },
  	formOk() {
  		return this.nombreOK  && this.telefonoOk && this.mailOk
  	}
  },
  methods: {
  	agregarPersona() {
      if(!this.verSiExiste()){
        if (!this.persona.sexo) {
          this.persona.sexo="indefinido"
        }
        this.personas.push(Object.assign({}, this.persona));
        const nombre=this.persona.nombre
        this.limpiarPersona();
        localStorage.setItem("datos", JSON.stringify(this.personas))
        this.mostrarMensaje("Contacto Agregado!","Se ha agregado a "+nombre+" a tu agenda","alert-success")
      }
      else{
        this.mostrarMensaje("Advertencia!","Ya existe un contacto con alguno de esos datos","alert-warning")
      }
      
  	},
    verSiExiste(){
      if(this.personas.filter(persona => persona.nombre.toLowerCase().indexOf(this.persona.nombre.toLowerCase()) >= 0).length>0){
        return true
      }
      if (this.personas.filter(persona => persona.telefono == this.persona.telefono).length>0) {
        return true
      }
      if (this.personas.filter(persona => persona.mail.indexOf(this.filtro) >= 0).length>0) {}
    },
    eliminarPersona(indice){
      const nombre = this.personas[indice].nombre
      this.personas.splice(indice, 1);
      localStorage.setItem("datos", JSON.stringify(this.personas))
      this.mostrarMensaje("Eliminado!","Contacto "+nombre+" a sido liminado","alert-danger")
    },
  	limpiarPersona() {
  		this.persona.nombre = '';
  		this.persona.telefono = '';
  		this.persona.sexo = '';
      this.persona.mail = '';
  	},
  	cambiarVista(vista) {
  		this.vista = vista;
  	},
    mostrarMensaje(fuerte,mensaje,tipo){
      this.tipomensaje=tipo
      this.fuerte=fuerte
      this.mensaje=mensaje
      this.boleanmensaje=true
      setTimeout(this.cerrarMensaje,3000)
    },
  	cerrarMensaje() {
  		this.boleanmensaje = false;
  	},
    importar(){
      debugger
      var texto = document.getElementById("textimport").value
      if (this.importacion!="reemplazar") {
        var primerString = document.getElementById("txtexporat").value
        var segundoString = document.getElementById("textimport").value
        primerString=primerString.slice(0,-1)
        segundoString=segundoString.slice(1)
        debugger
        texto = primerString+","+segundoString
        debugger
      }
      this.personas=JSON.parse(texto)
      localStorage.setItem("datos", JSON.stringify(this.personas))
      this.mostrarMensaje("Importado","se han importado los datos","alert-success")
    },
    exportar(){
      var texto = document.getElementById("txtexporat")
      texto.select()
      document.execCommand("copy");
      this.mostrarMensaje("Copiado!","Se ha copiado el contenido, guardelo en un archivo de texto","alert-success")
    }
  },
  mounted(){
      if (localStorage.getItem("datos")) {
        this.personas=JSON.parse(localStorage.getItem("datos"))
      }
      
  }
})