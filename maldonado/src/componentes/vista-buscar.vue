<template>
    <div class="vista-buscar">
            <div class="row">
                <div class="col s12 m10 l6 offset-m1 offset-l3 hoja">
                    <div class="alert" id="alerta2" v-show="mensaje == true">
                        <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
                        Holy Guacamole! Contacto editado con exito.
                    </div>
                    <input type="text" placeholder="Filtrar" v-model="filtro">
                    <h3 v-if="!this.personas.length">No hay personas</h3>
                    <tarjeta-contacto v-else v-for="(persona, index) in personasFiltradas"
                        :persona="persona" :index="index" @agregarAfavoritos="agregarAfavoritos" 
                        @traerPersona="traerPersona" @eliminarPersona="eliminarPersona">
                    </tarjeta-contacto>
                </div>
            </div>
    </div>
</template>

<script>
    import tarjetaContacto from './tarjeta-contacto.vue';

    export default {
        name: 'vistaBuscar',
        props: ['personas', 'personaEditar', 'favoritos'],
        components: {
            tarjetaContacto
        },
        data() {
            return {
                vista: '',
                filtro: '',
                mensaje: false
            }
        },
        computed: {
            personasFiltradas() {
                return this.personas.filter(p => p.nombre.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0 ||
                p.apellido.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0 ||
                p.edad.indexOf(this.filtro) >= 0 ||
                p.telefono.indexOf(this.filtro) >= 0 ||
                p.sexo.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0 ||
                p.gustos.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0);
            }
        },
        methods: {
            agregarAfavoritos(indicePersona) {
                const nuevoFavorito = this.personas.splice(indicePersona, 1);
                this.favoritos.push(nuevoFavorito[0]);
                this.actualizarPersonasYFavoritos();
            },
            traerPersona(personaDesdeComponenteEditar){
                console.log(personaDesdeComponenteEditar);
                this.personaEditar.nombre = this.personas[personaDesdeComponenteEditar].nombre;
                this.personaEditar.apellido = this.personas[personaDesdeComponenteEditar].apellido;
                this.personaEditar.edad = this.personas[personaDesdeComponenteEditar].edad;
                this.personaEditar.telefono = this.personas[personaDesdeComponenteEditar].telefono;
                this.personaEditar.sexo = this.personas[personaDesdeComponenteEditar].sexo;
                this.personaEditar.gustos = this.personas[personaDesdeComponenteEditar].gustos;
                this.indicePersonaAEditar = personaDesdeComponenteEditar;
                this.vista = 'editar';
            },
            eliminarPersona(indicePersonaAeliminar) {
                this.personas.splice(indicePersonaAeliminar, 1);
                this.agregarPersonaALocalStorage();
            },
            agregarPersonaALocalStorage(){
                localStorage.setItem('personas', JSON.stringify(this.personas));
            },
            agregarFavoritoALocalStorage(){
                localStorage.setItem('favoritos', JSON.stringify(this.favoritos));
            },
            //Metodo solamente hecho para no repetir codigo
            actualizarPersonasYFavoritos(){
                this.agregarPersonaALocalStorage();
                this.agregarFavoritoALocalStorage();
            }
        }
    }
</script>

<style>
    
</style>