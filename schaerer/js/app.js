new Vue({
	el: '#app',
	data: {
		contacto: {
			nombre: '',
			apellido: '',
			edad: '',
			sexo: '',
			direccion: ''
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
			this.vista = vista;
			this.filtro = '';
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
		borrarContacto(indice){
			this.contactos.splice(indice, 1);
			this.setContactosLocalStorage();
			this.mensajeContactoEliminado = true;
		},
		abrirFormularioEditarContacto(indice){
			this.cambiarVista("vistaEditarContacto");
			this.contacto.nombre = this.contactos[indice].nombre;
			this.contacto.apellido = this.contactos[indice].apellido;
			this.contacto.edad = this.contactos[indice].edad;
			this.contacto.direccion = this.contactos[indice].direccion;
			this.contacto.sexo = this.contactos[indice].sexo;
			this.indiceContactoSeleccionado = indice;
		},
		editarContacto(){
			this.contactos.splice(this.indiceContactoSeleccionado, 1, Object.assign({}, this.contacto));
			this.setContactosLocalStorage();
			this.cambiarVista("vistaListaContactos");
			this.limpiarDatosContacto();
			this.indiceContactoSeleccionado = '';
			this.mensajeContactoEditado = true;
		}
	},
	mounted(){
		this.getContactosLocalStorage();
		this.vista = "vistaAgregarContacto";
	}
})