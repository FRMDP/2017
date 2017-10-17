const news = [];

export default {
	traerContacto(id) {
		return contactos.find(c => c.id == id);
	},
	traerContactos() {
		return contactos;
	},
	agregarContacto(contacto) {
		contactos.push(contacto);
	}
}
