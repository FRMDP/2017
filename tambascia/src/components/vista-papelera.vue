<template>
    <div class="row">
        <div class="mx-auto">
            <div v-if="borradoAlert" @click.prevent="cerrarAlert" class="alert alert-danger marginOfCards" role="alert">
                Se ha borrado el usuario Definitivamente.
            </div>
            <div v-if="restauradoAlert" @click.prevent="cerrarAlert" class="alert alert-warning marginOfCards"
                 role="alert">
                Se ha restaurado el usuario correctamente.
            </div>
            <div v-if="editadoAlert" @click.prevent="cerrarAlert" class="alert alert-info marginOfCards" role="alert">
                Se ha editado el usuario.
            </div>
            <h2>Mi papelera de reciclaje</h2>
            <input type="text" placeholder="Buscar en la Papelera" v-model="filtro" class="form-control maginOfForms">
            <h3 v-if="!trash.length">Su papelera esta vacia</h3>
            <div v-else v-for="(persona, index) in trashFiltrados">
                <div class="card marginOfCards">
                    <div class="card-body">
                        <h4 class="card-title">Nombre: {{ persona.nombre }} <br> Edad: {{ persona.edad }} <br> Sexo: {{
                            persona.sexo }} <br> Telefono: {{ persona.cel }} <br> Mail: {{ persona.mail }}</h4>
                        <a href="#" class="btn btn-outline-danger" @click.prevent="borrarPersonaDefinitivamente(index)">Borrar
                            Definitivamente</a>
                        <a href="#" class="btn btn-outline-warning" @click.prevent="restaurar(index)">Restaurar</a>
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
        name: 'vistaPapelera',
        props: ['personas', 'trash'],
        data() {
            return {
                filtro: '',
                borradoAlert: false,
                restauradoAlert: false,
                editadoAlert: false
            }
        },
        computed: {
            personasFiltradas() {
                return this.personas.filter(p => p.nombre.toLowerCase().indexOf(this.filtro) >= 0 || p.edad.indexOf(this.filtro) >= 0 || p.sexo.toLowerCase().indexOf(this.filtro) >= 0 || p.cel.indexOf(this.filtro) >= 0 || p.mail.toLowerCase().indexOf(this.filtro) >= 0);
            },
            trashFiltrados() {
                return this.trash.filter(p => p.nombre.toLowerCase().indexOf(this.filtro) >= 0 || p.edad.indexOf(this.filtro) >= 0 || p.sexo.toLowerCase().indexOf(this.filtro) >= 0 || p.cel.indexOf(this.filtro) >= 0 || p.mail.toLowerCase().indexOf(this.filtro) >= 0);
            }
        },
        methods: {
            borrarPersonaDefinitivamente(idx) {
                this.$emit('borrarPersonaDefinitivamente', idx);
                this.borradoAlert = true;
            },
            cerrarAlert() {
                this.borradoAlert = false;
                this.restauradoAlert = false;
            },
            modificarPersona(idx) {
                this.$emit('modificarPersona', idx);
            },
            restaurar(idx) {
                this.$emit('restaurar', idx);
                this.restauradoAlert = true;
            }
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

