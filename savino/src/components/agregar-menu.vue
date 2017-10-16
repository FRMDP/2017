<template>
    <div class="row agregar-menu">
        <h2>Agregar contacto</h2>
        <div class="col-md-4">
            <label><i class="fa fa-asterisk" title="Campo requerido" data-placement="bottom" aria-hidden="true"></i>Nombre</label>
            <input v-model="persona.nombre" class="form-control" type="text" placeholder="Ingrese nombre" required>
        </div>
        <div class="col-md-4">
            <label><i class="fa fa-asterisk" title="Campo requerido" data-placement="bottom" aria-hidden="true"></i>Apellido</label>
            <input v-model="persona.apellido" class="form-control" type="text" placeholder="Ingrese apellido" required>
        </div>
        <div class="col-md-4">
            <label><i class="fa fa-asterisk" title="Campo requerido" data-placement="bottom" aria-hidden="true"></i>Teléfono</label>
            <input type="number" class="form-control" placeholder="Ingrese telefono" v-model="persona.telefono" required>
        </div>
        <div class="col-md-4">
            <label><i class="fa fa-asterisk" title="Campo requerido" data-placement="bottom" aria-hidden="true"></i>Género</label>
            <div>
                <input value="varon" id="radio1" name="radio" type="radio" v-model="persona.genero">
                <span class="custom-control-description">Varón</span>
                <input value="mujer" id="radio2" name="radio" type="radio" v-model="persona.genero">
                <span class="custom-control-description">Mujer</span>
            </div>
        </div>
        <div class="col-md-4">
            <label>Correo electrónico</label>
            <input v-model="persona.mail" class="form-control" type="email" placeholder="Ingrese correo electrónico">
        </div>
        <div class="col-md-4">
            <label>Grupo</label>
            <input v-model="persona.grupo" class="form-control" type="text" placeholder="Ingrese grupo">
        </div>
        <div class="col-md-4">
            <label><i class="fa fa-asterisk" title="Campo requerido" data-placement="bottom" aria-hidden="true"></i>Favorito</label>
            <div>
                <input value="true" id="radio3" name="radiof" type="radio" v-model="persona.favorito">
                <span class="custom-control-description">Si</span>
                <input value="false" id="radio4" name="radiof" type="radio" v-model="persona.favorito">
            </div>
        </div>

        <div class="col-md-12">
            <button class="btn btn-success btnAccion"  type="submit" @click.prevent="agregarPersona">Ingresar</button>
        </div>
    </div>
</template>

<script>
    export default {
    	name: 'agregarMenu',
        data () {
            return {
                persona: [{
                    nombre: '',
                    apellido:'',
                    telefono: '',
                    mail:'',
                    genero:'',
                    grupo:'',
                    favorito: ''
                }]

            }
        },
        computed: {
            formOk() {
                return this.persona.nombre 
                && this.persona.apellido 
                && this.persona.telefono
                && this.persona.genero
                && this.persona.grupo
            }
        },
        methods: {
            agregarPersona() {
                this.$emit('agregarPersona', this.persona);
                this.limpiarPersona();
            },
            limpiarPersona() {
                this.persona.nombre = '';
                this.persona.apellido = '';
                this.persona.telefono = '';
                this.persona.mail = '';
                this.persona.genero = '';
                this.persona.grupo='';
                this.persona.favorito = '';
            }
        }
    }
</script>
