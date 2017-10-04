new Vue({
    el: '#app',
    data: {
        persona: {
            nombre: '',
            edad: '',
            sexo: '',
            cel: '',
            mail: '',
        },
        personas: [],
        trash: [],
        filtro: '',
        vista: 'ingresar',
        borradoAlert: false,
        restauradoAlert: false,
        ingresadoAlert: false,
        editadoAlert: false,
        vistaPersonaEditada: '',
        index: ''
    },
    computed: {
        personasFiltradas() {
            return this.personas.filter(p => p.nombre.toLowerCase().indexOf(this.filtro) >= 0 || p.edad.indexOf(this.filtro) >= 0 || p.sexo.toLowerCase().indexOf(this.filtro) >= 0 || p.cel.indexOf(this.filtro) >= 0 || p.mail.toLowerCase().indexOf(this.filtro) >= 0);
        },
        formOk() {
            return this.persona.nombre && this.persona.edad && this.persona.sexo;
        },
        trashFiltrados() {
            return this.trash.filter(p => p.nombre.toLowerCase().indexOf(this.filtro) >= 0 || p.edad.indexOf(this.filtro) >= 0 || p.sexo.toLowerCase().indexOf(this.filtro) >= 0 || p.cel.indexOf(this.filtro) >= 0 || p.mail.toLowerCase().indexOf(this.filtro) >= 0);
        },
    },
    methods: {
        agregarPersona() {
            this.personas.push(Object.assign({}, this.persona));
            this.savePersonasToStorage();
            this.limpiarPersona();
            this.ingresadoAlert = true;
        },
        limpiarPersona() {
            this.persona.nombre = '';
            this.persona.edad = '';
            this.persona.sexo = '';
            this.persona.cel = '';
            this.persona.mail = '';
        },
        getPersonasFromStorage() {
            const persons = localStorage.getItem('persona');
            if (persons) {
                this.personas = JSON.parse(persons);
            }
        },
        savePersonasToStorage() {
            localStorage.setItem('persona', JSON.stringify(this.personas));
        },
        getTrashFromStorage() {
            const persons = localStorage.getItem('papelera');
            if (persons) {
                this.trash = JSON.parse(persons);
            }
        },
        saveTrashToStorage() {
            localStorage.setItem('papelera', JSON.stringify(this.trash));
        },
        borrarPersona(idx) {
           let borrado = this.personas.splice(idx, 1);
           this.savePersonasToStorage();
           this.trash.push(borrado[0]);
           this.saveTrashToStorage();
           this.borradoAlert = true;
        },
        borrarPersonaDefinitivamente(idx) {
            this.trash.splice(idx, 1);
            this.saveTrashToStorage();
            this.borradoAlert = true;
        },
        restaurar(idx) {
            let restored = this.trash.splice(idx, 1);
            this.saveTrashToStorage();
            this.personas.push(restored[0]);
            this.savePersonasToStorage();
            this.restauradoAlert = true;
        },
        cambiarVista(vista) {
            this.vista = vista;
            this.limpiarPersona();
        },
        cerrarAlert() {
            this.borradoAlert = false;
            this.restauradoAlert = false;
            this.ingresadoAlert = false;
            this.editadoAlert = false;
        },
        modificarPersona(idx){
            this.vistaPersonaEditada = this.vista;
            let editado;
            if(this.vistaPersonaEditada == "buscar"){
                 editado = this.personas[idx];
            }
            else if(this.vistaPersonaEditada == 'papelera'){
                editado = this.trash[idx];
            }
            this.index = idx;
            this.cambiarVista("editar");
            this.persona.nombre = editado.nombre;
            this.persona.edad = editado.edad;
            this.persona.mail = editado.mail;
            this.persona.sexo = editado.sexo;
            this.persona.cel = editado.cel;
        },
        confirmarEdicion(){
            if(this.vistaPersonaEditada == "buscar"){
                this.personas.splice(this.index, 1, Object.assign({}, this.persona));
                this.savePersonasToStorage();
            }
            else if(this.vistaPersonaEditada == 'papelera'){
                this.trash.splice(this.index, 1, Object.assign({}, this.persona));
                this.saveTrashToStorage();
            }
            this.index = '';
            this.cambiarVista(this.vistaPersonaEditada);
            this.vistaPersonaEditada = '';
            this.editadoAlert = true;
        }
    },
    mounted() {
        this.getPersonasFromStorage();
        this.getTrashFromStorage();
    }
})
