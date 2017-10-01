const vf = new Vue({
    el: '#app',
    data: {
        personas: [],
        persona:{
            indice: '',
            nombre: '',
            apellido: '',
            telefono: '',
            direccion: '',
            mail: '',
            sexo:'',
            favorito:''
        },
        checkedBox: [],
        ultimoId: 1,
        alertaAgregado: false,
        alertaModificado: false,
        vista: 'agregar',
        filtro: '',
        estadoMenu: false
    }, //data
    computed: {
        personasFiltradas() { //no importa lo que se ponga en filtro, busca por cualquier campo
            return this.personas.filter(p => (p.nombre.toUpperCase().indexOf(this.filtro.toUpperCase()) >= 0) || p.apellido.toUpperCase().indexOf(this.filtro.toUpperCase()) >= 0
                || p.direccion.toUpperCase().indexOf(this.filtro.toUpperCase()) >=0 || p.mail.toUpperCase().indexOf(this.filtro.toUpperCase()) >= 0
                || p.telefono.indexOf(this.filtro) >= 0 || p.sexo.toUpperCase().indexOf(this.filtro.toUpperCase()) >= 0);
        },
        cantPersonas(){
            return this.personas.length;
        },
        formOK() {
            return this.persona.nombre && this.persona.apellido && this.persona.sexo 
                && this.persona.direccion && this.persona.mail && this.persona.telefono;
        },
        comprobarCheck(check){
            return this.checkedBox.indexOf(check);
        },
        personasFavoritas(){// filtra el array y solo devuelve los que son favoritos
          return this.personas.filter(p=> (p.favorito==true));
        },
        cantFavoritos(){ //devuelve la cantidad de favoritos que hay
            return this.personas.filter(p=> (p.favorito==true)).length;
        },
    }, //computed
    methods: {
        cambiarVista(vista){
            this.vista = vista;
            if(vista!="modificar")
                this.cambiarMenu();
            this.alertaAgregado = false;
            this.alertaModificado = false;
            this.limpiarForm();
        },
        cambiarAlerta(tipo){
            if(tipo == 'agregado')
                this.alertaAgregado = !this.alertaAgregado
            else
                this.alertaModificado = !this.alertaModificado;
        },
        cambiarMenu(){
            this.estadoMenu = !this.estadoMenu;
        },
        limpiarForm(){
            this.persona.nombre= '';
            this.persona.apellido= '';
            this.persona.telefono= '';
            this.persona.direccion= '';
            this.persona.mail= '';
            this.persona.sexo= '';
        },
        nuevaPersona() {
            this.persona.indice = this.ultimoId;
            this.ultimoId++;
            this.persona.favorito=false;
            this.personas.push(Object.assign({}, this.persona));
            personasText = JSON.stringify(this.personas);
            localStorage.setItem("contactos", personasText);
            this.limpiarForm();
            this.cambiarAlerta("agregado"); 
        },
        cargarPersona(person){
            this.persona.indice = person.indice;
            this.persona.nombre = person.nombre;
            this.persona.apellido = person.apellido;
            this.persona.direccion = person.direccion;
            this.persona.telefono = person.telefono;
            this.persona.mail = person.mail;
            this.persona.sexo = person.sexo;
            this.persona.favorito= person.favorito;

        },
        pasarModificar(person){
            this.cambiarVista('modificar');
            this.cargarPersona(person);
        },
        buscarPosicion(){
            pos = 0;
            while(this.personas[pos].indice != this.persona.indice)
                pos++;
            return pos;
        },
        modificarPersona(){
            pos = this.buscarPosicion();
            this.personas[pos].nombre = this.persona.nombre;
            this.personas[pos].apellido = this.persona.apellido;
            this.personas[pos].direccion = this.persona.direccion;
            this.personas[pos].telefono = this.persona.telefono;
            this.personas[pos].mail = this.persona.mail;
            this.personas[pos].sexo = this.persona.sexo;
            this.limpiarForm();
            this.cambiarAlerta('modificado');
        },
        borrarPersona(person){
            if(confirm("¿Realmente desea borrar al contacto?")){
                this.cargarPersona(person);
                while(this.personas[this.buscarPosicion()].indice != this.persona.indice)
                    pos++;
                this.personas.splice(pos,1);
                if(this.personas.length == 0)
                    localStorage.clear();
                else{
                    personasText = JSON.stringify(this.personas);
                    localStorage.setItem("contactos", personasText);
                }
            }
        },
        cambiarFavorito(person){ //busca la persona e invierte el estado de favorito
            this.cargarPersona(person);
            pos= this.buscarPosicion();
            this.personas[pos].favorito= !this.persona.favorito;
            this.limpiarForm();
            personasText = JSON.stringify(this.personas);
            localStorage.setItem("contactos", personasText);

        },

    }, //methods
    mounted(){ //se ejecuta una vez al principio
        if(localStorage.length != 0 ){
            this.personas = JSON.parse(localStorage.getItem("contactos"));
            this.ultimoId = this.personas[(this.personas.length-1)].indice + 1; 
        }
    }
});