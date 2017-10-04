<template>
    <div class="row">
        <div class="mx-auto">
            <div v-if="borradoAlert" @click.prevent="cerrarAlert" class="alert alert-danger marginOfCards" role="alert">
                Se ha borrado el usuario. Tranquilo! Esta en su papelera.
            </div>
            <div v-if="editadoAlert" @click.prevent="cerrarAlert" class="alert alert-info marginOfCards" role="alert">
                Se ha editado el usuario.
            </div>
            <h2>Busqueda de Contactos</h2>
            <input type="text" placeholder="Buscar Contacto" v-model="filtro" class="form-control maginOfForms">
            <h3 v-if="!personas.length">No hay personas</h3>
            <div v-else v-for="(persona, index) in personasFiltradas">
                <div class="card marginOfCards">
                    <div class="card-body">
                        <h4 class="card-title">Nombre: {{ persona.nombre }} <br> Edad: {{ persona.edad }} <br> Sexo: {{
                            persona.sexo }} <br> Telefono: {{ persona.cel }} <br> Mail: {{ persona.mail }}</h4>
                        <a href="#" class="btn btn-outline-danger" @click.prevent="borrarPersona(index)">Borrar</a>
                        <a href="#" class="btn btn-outline-info" @click.prevent="modificarPersona(index)">Editar</a>
                    </div>
                </div>
            </div>
            <h3 v-if="!personasFiltradas.length">Su busqueda no produjo resultados</h3>
        </div>


    </div>


</template>

<script>
    export default {
        name: 'vistaBuscar',
        props: ['personas', 'trash'],
        data() {
            return {
                filtro: '',
                borradoAlert: false,
                editadoAlert: false
            }
        },
        computed: {
            personasFiltradas() {
                return this.personas.filter(p => p.nombre.toLowerCase().indexOf(this.filtro) >= 0 || p.edad.indexOf(this.filtro) >= 0 || p.sexo.toLowerCase().indexOf(this.filtro) >= 0 || p.cel.indexOf(this.filtro) >= 0 || p.mail.toLowerCase().indexOf(this.filtro) >= 0);
            },
        },
        methods: {
            borrarPersona(idx) {
                this.$emit('borrarPersona', idx);
                this.borradoAlert = true;
            },
            cerrarAlert() {
                this.borradoAlert = false;
                this.editadoAlert = false;
            },
            modificarPersona(idx) {
                this.$emit('modificarPersona', idx);
            },
        }
    }

</script>

<style>
    h4 {
        font-family: 'Ubuntu', sans-serif;
    }
    h2 {
        font-family: 'Ubuntu', sans-serif;
        color: grey;
        margin-top: 10px;
    }
    h3 {
        font-family: 'Ubuntu', sans-serif;
        color: grey;
        margin-top: 10px;
        text-align: center;
    }
    .marginOfCards{
        margin-top: 10px;
    }
    .maginOfForms {
        margin-top: 30px;
    }
</style>



