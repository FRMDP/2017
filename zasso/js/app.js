new Vue({
    el: '#app',
    data: {
        persona: {
            nombre: '',
            apellido: '',
            edad: '',
            sexo: '',
            telefono: ''
        },
        personas: [],
        filtro: '',
        vista: 'ingresar',
        mensaje: false,
        indice: '',
        papelera: [],
    },
    computed: {
        personasFiltradas() {
            return this.personas.filter(p => p.nombre.search(new RegExp(this.filtro, "i")) >= 0 ||
                p.apellido.search(new RegExp(this.filtro, "i")) >= 0 ||
                p.edad.search(new RegExp(this.filtro, "i")) >= 0 ||
                p.sexo.search(new RegExp(this.filtro, "i")) >= 0 ||
                p.telefono.search(new RegExp(this.filtro, "i")) >= 0);
        },
        formOk() {
            return this.persona.nombre && this.persona.apellido && this.persona.edad && this.persona.sexo && this.persona.telefono;
        },
        papeleraFiltrados() {
            return this.papelera.filter(p => p.nombre.search(new RegExp(this.filtro, "i")) >= 0 ||
                p.apellido.search(new RegExp(this.filtro, "i")) >= 0 ||
                p.edad.search(new RegExp(this.filtro, "i")) >= 0 ||
                p.sexo.search(new RegExp(this.filtro, "i")) >= 0 ||
                p.telefono.search(new RegExp(this.filtro, "i")) >= 0);
        },

    },
    mounted: function () {
        this.obtenerPersonas_localStorage();
        this.obtenerPapelera_localStorage();
    },
    methods: {
        agregarPersona() {
            this.personas.push(Object.assign({}, this.persona));
            this.agregarLista_localStorage(this.personas);
            this.limpiarPersona();
            this.mensaje = true;
        },
        eliminarPersona(id) {
            let borrado = this.personas.splice(id, 1);
            this.agregarLista_localStorage(this.personas);
            this.papelera.push(borrado[0]);
            this.agregarPapelera_localStorage();
        },
        obtenerPersonas_localStorage(){
            let storeLista = localStorage.getItem('personaList');
            if (storeLista) {
                this.personas = JSON.parse(storeLista);
            }
        },

        obtenerPapelera_localStorage() {
            const persons = localStorage.getItem('papelera');
            if (persons) {
                this.papelera = JSON.parse(persons);
            }
        },
        agregarPapelera_localStorage() {
            localStorage.setItem('papelera', JSON.stringify(this.papelera));
        },
        eliminarPersonaDefinitivamente(id) {
            this.papelera.splice(id, 1);
            this.agregarPapelera_localStorage();
        },
        restaurar(id) {
            let restored = this.papelera.splice(id, 1);
            this.agregarPapelera_localStorage();
            this.personas.push(restored[0]);
            this.agregarLista_localStorage(this.personas);
        },

        limpiarPersona() {
            this.persona.nombre = '';
            this.persona.apellido = '';
            this.persona.edad = '';
            this.persona.sexo = '';
            this.persona.telefono = '';
        },
        cambiarVista(vista) {
            this.vista = vista;
            this.limpiarPersona();
        },
        cerrarMensaje() {
            this.mensaje = false;
        },
        cerrarEdicion() {
            this.mensaje = false;
            this.cambiarVista('buscar');

        },
        parametrosEditar(vista, indice) {
            this.cambiarVista(vista);
            this.indi = indice;
            this.persona.nombre = this.personas[indice].nombre;
            this.persona.apellido = this.personas[indice].apellido;
            this.persona.edad = this.personas[indice].edad;
            this.persona.sexo = this.personas[indice].sexo;
            this.persona.telefono = this.personas[indice].telefono;
        },
        editarPersona() {
            this.personas[this.indi].nombre = this.persona.nombre;
            this.personas[this.indi].apellido = this.persona.apellido;
            this.personas[this.indi].edad = this.persona.edad;
            this.personas[this.indi].sexo = this.persona.sexo;
            this.personas[this.indi].telefono = this.persona.telefono;
            this.agregarLista_localStorage(this.personas);
            this.limpiarPersona();
            this.mensaje = true;
            this.indi = '';
        },
        agregarLista_localStorage(lista) {
            localStorage.setItem('personaList', JSON.stringify(lista));
        }
    }
})
