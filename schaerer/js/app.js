new Vue({
	el: '#app',
	data: {
		contacto: {
			nombre: '',
			apellido: '',
			edad: '',
			sexo: '',
			direccion: '',
			favorito: false
		},
		contactos: [],
		filtro: '',
		vista: '',
		mensajeContactoAgregado: false,		// POR EL MOMENTO ESTOS 3 SIN IMPLEMENTACION
		mensajeContactoEliminado: false,	//HASTA DESCUBRIR ALGO PARECIDO A ALERTS CON MATERIALIZ3
		mensajeContactoEditado: false,								
		indiceContactoSeleccionado: ''										
	},
	computed: {
		contactosFiltrados() {
			return this.contactos.filter(c => c.nombre.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0
		                        || c.apellido.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0
		                        || c.edad.indexOf(this.filtro) >= 0
		                        || c.sexo.toLowerCase().indexOf(this.filtro.toLowerCase()) >=0
		                        || c.direccion.toLowerCase().indexOf(this.filtro.toLowerCase()) >=0
				);
		},
		formOk(){
			return this.contacto.nombre && this.contacto.apellido && this.contacto.edad && this.contacto.sexo && this.contacto.direccion;
		},
		busquedaIncorrecta(){			// PARA HACER APARECER MENSAJE CUANDO FILTRAS ALGO QUE NO HAY
			return this.contactos.length > 0 && this.contactosFiltrados.length == 0 && this.filtro!='';
		},
		contactosFavoritos(){
			return this.contactos.filter(c => c.favorito == true);
		}
	},
	methods: {
		limpiarDatosContacto(){
			this.contacto.nombre = '';
			this.contacto.apellido = '';
			this.contacto.edad = '';
			this.contacto.sexo = '';
			this.contacto.direccion = '';
		},
		cerrarMensajes(){
			this.mensajeContactoAgregado = false;
			this.mensajeContactoEditado = false;
			this.mensajeContactoEliminado = false;
		},
		cambiarVista(vista){
			this.cerrarMensajes();
			this.limpiarDatosContacto();
			if(this.vista != "vistaEditarContacto" && vista != "vistaEditarContacto"){
				this.filtro = '';
			}
			this.vista = vista;
		},
		setContactosLocalStorage(){
			localStorage.setItem('contactos', JSON.stringify(this.contactos));
		},
		getContactosLocalStorage(){
			const contacts = localStorage.getItem('contactos');
			if(contacts){
				this.contactos = JSON.parse(contacts);
			}
		},
		agregarContacto(){
			this.contactos.push(Object.assign({}, this.contacto));
			this.limpiarDatosContacto();
			this.mensajeContactoAgregado = true;
			this.setContactosLocalStorage();
		},
		borrarContacto(contact){
			this.indiceContactoSeleccionado = this.contactos.indexOf(contact);
			this.contactos.splice(this.indiceContactoSeleccionado, 1);
			this.setContactosLocalStorage();
			this.indiceContactoSeleccionado = '';
			this.mensajeContactoEliminado = true;
		},
		abrirFormularioEditarContacto(contact){
			this.indiceContactoSeleccionado = this.contactos.indexOf(contact);
			this.cambiarVista("vistaEditarContacto");
			this.contacto.nombre = this.contactos[this.indiceContactoSeleccionado].nombre;
			this.contacto.apellido = this.contactos[this.indiceContactoSeleccionado].apellido;
			this.contacto.edad = this.contactos[this.indiceContactoSeleccionado].edad;
			this.contacto.direccion = this.contactos[this.indiceContactoSeleccionado].direccion;
			this.contacto.sexo = this.contactos[this.indiceContactoSeleccionado].sexo;
		},
		editarContacto(){
			this.contactos.splice(this.indiceContactoSeleccionado, 1, Object.assign({}, this.contacto));
			this.setContactosLocalStorage();
			this.cambiarVista("vistaListaContactos");
			this.limpiarDatosContacto();
			this.indiceContactoSeleccionado = '';
			this.mensajeContactoEditado = true;
		},
		estadoFavorito(contact) {
			this.indiceContactoSeleccionado = this.contactos.indexOf(contact);
            this.contacto.favorito = contact.favorito;
            this.setContactosLocalStorage();
        }
	},
	mounted(){
		this.getContactosLocalStorage();
		this.vista = "vistaAgregarContacto";
	}
})