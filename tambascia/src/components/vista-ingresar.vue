<template>
    <div class="row">
        <div class="mx-auto" >
            <div v-if="ingresadoAlert" @click.prevent="cerrarAlert" class="alert alert-success marginOfCards"
                 role="alert">
                Usuario ingresado con exito.
            </div>
            <h2>Ingreso de Contactos</h2>
            <form>
                <div class="form-group maginOfForms">

                    <input v-model="persona.nombre" type="text" class="form-control"
                           placeholder="Ingrese su Nombre">
                </div>
                <div class="form-group">

                    <input v-model="persona.edad" type="number" class="form-control" placeholder="Ingrese su Edad"
                    >
                </div>
                <div class="form-group">
                    <input v-model="persona.cel" type="number" class="form-control"
                           placeholder="Ingrese su Telefono">
                </div>
                <div class="form-group">
                    <input v-model="persona.mail" type="email" class="form-control"
                           placeholder="Ingrese su Mail">
                </div>
                <div class="centerText">
                    <input value="Masculino" id="radio1" name="radio" type="radio"
                           v-model="persona.sexo">
                    <span class="custom-control-description">Varon</span>
                    <input value="Femenino" id="radio2" name="radio" type="radio" v-model="persona.sexo">
                    <span class="custom-control-description">Mujer</span>
                    <br>
                    <button :disabled="!formOk" type="submit" @click.prevent="agregarPersona"
                            class="btn btn-outline-success marginOfCards">Ingresar
                    </button>
                </div>
            </form>
        </div>

    </div>
</template>
<script>
    export default {
        name: 'vistaIngresar',
        data() {
            return {
                persona: {
                    nombre: '',
                    edad: '',
                    sexo: '',
                    cel: '',
                    mail: '',
                },
                ingresadoAlert: false,
            }
        },
        computed: {
            formOk() {
                return this.persona.nombre && this.persona.edad && this.persona.sexo;
            }
        },
        methods: {
            limpiarPersona() {
                this.persona.nombre = '';
                this.persona.edad = '';
                this.persona.sexo = '';
                this.persona.cel = '';
                this.persona.mail = '';
            },
            agregarPersona(){
                this.$emit('agregarPersona', Object.assign({}, this.persona));
                this.ingresadoAlert = true;
                this.limpiarPersona();
            },
            cerrarAlert() {
                this.ingresadoAlert = false;
            },
        }
    }
</script>

<style>
    h2 {
        font-family: 'Ubuntu', sans-serif;
        color: grey;
        margin-top: 10px;
    }
    .centerText{
        text-align:center;
    }

    .marginOfCards{
        margin-top: 10px;
    }
</style>