<template>
    <div class="container-fluid app" id="app">
        <vista-header @cambiarVista="cambiarVista" @cerrarAlert="cerrarAlert"></vista-header>
        <vista-ingresar v-if="vista == 'ingresar'" @agregarPersona="agregarPersona" @cerrarAlert="cerrarAlert"></vista-ingresar>
        <vista-buscar v-if="vista == 'buscar'" @modificarPersona="modificarPersona" @savePersonasToStorage="savePersonasToStorage" @borrarPersona="borrarPersona" @cerrarAlert="cerrarAlert"
                      :personas="personas"></vista-buscar>
        <vista-papelera v-if="vista == 'papelera'" @modificarPersona="modificarPersona" @borrarPersonaDefinitivamente="borrarPersonaDefinitivamente" @restaurar="restaurar" @cerrarAlert="cerrarAlert"
                        :trash="trash" :personas="personas"></vista-papelera>
        <vista-editar v-if="vista == 'editar'" @confirmarEdicion="confirmarEdicion" :persona="persona" :personas="personas" @cerrarAlert="cerrarAlert"
                       ></vista-editar>
    </div>
</template>

<script>
    import vistaHeader from './vista-header.vue';
    import vistaBuscar from './vista-buscar.vue';
    import vistaPapelera from './vista-papelera.vue';
    import vistaEditar from './vista-editar.vue';
    import vistaIngresar from './vista-ingresar.vue';

    export default {
        name: 'app',
        components: {
            vistaHeader,
            vistaBuscar,
            vistaPapelera,
            vistaIngresar,
            vistaEditar
        },
        data() {
            return {
                vista: 'ingresar',
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
                borradoAlert: false,
                restauradoAlert: false,
                ingresadoAlert: false,
                editadoAlert: false,
                vistaPersonaEditada: '',
                index: ''

            }
        },
        methods: {
            cambiarVista(vista) {
                this.vista = vista;
                this.borradoAlert = false;
                this.restauradoAlert = false;
                this.ingresadoAlert = false;
                this.editadoAlert = false;
            },
            //ingresar
            agregarPersona(aIngresar) {
                this.personas.push(aIngresar);
                this.savePersonasToStorage();
                this.limpiarPersona();
                this.ingresadoAlert = true;
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
            //buscar
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
            //papelera
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
            cerrarAlert() {
                this.borradoAlert = false;
                this.restauradoAlert = false;
                this.ingresadoAlert = false;
                this.editadoAlert = false;
            },
            //editar
            modificarPersona(idx) {
                this.vistaPersonaEditada = this.vista;
                let editado;
                if (this.vistaPersonaEditada == "buscar") {
                    editado = this.personas[idx];
                }
                else if (this.vistaPersonaEditada == 'papelera') {
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
            confirmarEdicion() {
                if (this.vistaPersonaEditada == "buscar") {
                    this.personas.splice(this.index, 1, Object.assign({}, this.persona));
                    this.savePersonasToStorage();
                }
                else if (this.vistaPersonaEditada == 'papelera') {
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
        },
    }
</script>
