<template>
	<div>
		<agenda-nav @cambiarVista="cambiarVista"></agenda-nav>
		<vista-AgregarContacto v-show="vista == 'vistaAgregarContacto'" @agregarContacto="agregarContacto"></vista-AgregarContacto>
		<vista-ListaContactos v-show="vista == 'vistaListaContactos'" 
                @borrarContacto="borrarContacto" @abrirFormularioEditarContacto="abrirFormularioEditarContacto" @estadoFavorito="estadoFavorito"
                 :contactos="contactos" :mensajeContactoEditado="mensajeContactoEditado">
		</vista-ListaContactos>
        <vista-ListaFavoritos v-show="vista == 'vistaListaFavoritos'" 
                @borrarContacto="borrarContacto" @abrirFormularioEditarContacto="abrirFormularioEditarContacto" @estadoFavorito="estadoFavorito"
                 :contactos="contactos" :mensajeContactoEditado="mensajeContactoEditado">
        </vista-ListaFavoritos>
        <vista-EditarContacto v-show="vista == 'vistaEditarContacto'" @editarContacto="editarContacto" 
                 :contactoEditar="contactoEditar">
        </vista-EditarContacto>
	</div>
</template>

<script>
	import agendaNav from './agenda-nav.vue';
	import vistaAgregarContacto from './vista-AgregarContacto.vue';
    import vistaListaContactos from './vista-ListaContactos.vue';
    import vistaListaFavoritos from './vista-ListaFavoritos.vue';
    import vistaEditarContacto from './vista-EditarContacto.vue';

    export default {
    	name: 'app',
    	components: {
    		agendaNav,
    		vistaAgregarContacto,
            vistaListaContactos,
            vistaListaFavoritos,
            vistaEditarContacto
    	},
    	data() {
    		return {
    			vista: '',
    			contactos: [],
    			indiceContactoEditar: '',
                contactoEditar: {
                    nombre: '',
                    apellido: '',
                    edad: '',
                    sexo: '',
                    direccion: '',
                    favorito: false
                },
                mensajeContactoEditado: false
    		}
    	},
    	methods: {
    		setContactosLocalStorage(){
				localStorage.setItem('contactos', JSON.stringify(this.contactos));
			},
			getContactosLocalStorage(){
				const contacts = localStorage.getItem('contactos');
				if(contacts){
					this.contactos = JSON.parse(contacts);
				}
			},
    		cambiarVista(vista) {
    			this.vista = vista;
    		},
    		agregarContacto(contacto){
    			this.contactos.push(contacto);
    			this.setContactosLocalStorage();
    		},
            borrarContacto(index){
                this.contactos.splice(index, 1);
                this.setContactosLocalStorage();
            },
            abrirFormularioEditarContacto(index){
                this.cambiarVista("vistaEditarContacto");
                this.contactoEditar.nombre = this.contactos[index].nombre;
                this.contactoEditar.apellido = this.contactos[index].apellido;
                this.contactoEditar.edad = this.contactos[index].edad;
                this.contactoEditar.direccion = this.contactos[index].direccion;
                this.contactoEditar.sexo = this.contactos[index].sexo;
                this.contactoEditar.favorito = this.contactos[index].favorito;
                this.indiceContactoEditar = index;
            },
            editarContacto(){
                this.contactos.splice(this.indiceContactoEditar, 1, Object.assign({}, this.contactoEditar));
                this.setContactosLocalStorage();
                this.cambiarVista("vistaListaContactos");
                this.mensajeContactoEditado = true;
            },
            estadoFavorito(index){
                this.contactos[index].favorito = !(this.contactos[index].favorito);
                this.setContactosLocalStorage();
            }
    	},
    	mounted(){
		this.getContactosLocalStorage();
		this.vista = "vistaAgregarContacto";
		}
    }
</script>