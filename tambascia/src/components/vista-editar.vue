<template>
    <div class="row">
        <div class="mx-auto">
            <h2>Edite el Contacto</h2>
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
                    <button :disabled="!formOk" type="submit" @click.prevent="confirmarEdicion"
                            class="btn btn-outline-success marginOfCards">Aceptar modificaciones
                    </button>
                </div>
            </form>
        </div>

    </div>

</template>
<script>
    export default {
        name: 'vistaEditar',
        props: ['personas', 'persona'],
        data() {
            return {
                editadoAlert: false,
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
            confirmarEdicion() {
                this.$emit('confirmarEdicion');
            },
            cerrarAlert() {
                this.editadoAlert = false;
            }
        }
    }
</script>

<style>
    .marginOfCards {
        margin-top: 10px;
    }

    h2 {
        font-family: 'Ubuntu', sans-serif;
        color: grey;
        margin-top: 10px;
    }
    .centerText{
        text-align:center;
    }
</style>


