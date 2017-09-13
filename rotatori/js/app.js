const vf = new Vue({
    el: '#app',
    data: {
        persona:{
            nombre: '',
            apellido: '',
            telefono: '',
            direccion: '',
            mail: '',
            sexo:''
        },
        personas: [],
        estadoAlerta: false,
        vista: 'agregar',
        filtro: '',
    },
    computed: {
        personasFiltradas() {
            return this.personas.filter(p => p.nombre.indexOf(this.filtro) >= 0);
            //return this.personasFiltradas.filter(p => p.indexOf(this.filtro) >= 0);
        },
        cantPersonas(){
            return this.personas.length;
        },
        formOK() {
            return this.persona.nombre && this.persona.apellido && this.persona.sexo 
            && this.persona.direccion && this.persona.mail && this.persona.telefono;
        },
        alerta(){
            return this.estadoAlerta;
        }
    },
    methods: {
        cambiarVista(vista){
            this.vista = vista;
            this.estadoAlerta = false;
        },
        cambiarAlerta(){
            if (this.estadoAlerta)
                this.estadoAlerta=false
            else
                this.estadoAlerta=true;
        },
        limpiarForm(){
            this.persona.nombre='';
            this.persona.apellido='';
            this.persona.telefono='';
            this.persona.direccion='';
            this.persona.mail='';
            this.persona.sexo='';
        },
        nuevaPersona() {
            this.personas.push(Object.assign({}, this.persona));
            this.limpiarForm();
            this.cambiarAlerta();
            
        },
    }
});