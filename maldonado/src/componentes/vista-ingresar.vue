<template>
    <div class="vista-ingresar">
        <div class="row">
            <div class="col s12 m10 l6 offset-m1 offset-l3 hoja">
                <div class="alert" id="alerta" v-show="mensaje == true">
                    <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
                    Holy Guacamole! Contacto agregado con exito.
                </div>
                <div class="row">
                    <div class="col s12 m12 l12">
                        <h4 class="tituloIngreso">Agregar una persona a contactos</h4>
                    </div>
                </div>
                <form>
                    <input v-model="persona.nombre" type="text" id="first_name" placeholder="Ingrese Nombre">
                    <input v-model="persona.apellido" type="text" id="last_name" 
                        placeholder="Ingrese Apellido">
                    <input type="number" placeholder="Ingrese Edad" id="age" v-model="persona.edad">
                    <input type="number" placeholder="Ingrese Telefono" id="phone" 
                        v-model="persona.telefono">
                    <textarea id="textarea" v-model="persona.gustos" class="materialize-textarea" 
                        placeholder="Ingrese de forma breve sus gustos">
                    </textarea>
                    <label for="sexo">Indique sexo</label>
                    <div class="row" id="sexo">
                        <div class="col l4">
                            <input class="with-gap" name="sexo" value="Varon" type="radio" id="varon" 
                                v-model="persona.sexo"/>
                            <label for="varon">Varon</label>
                            <input class="with-gap" name="sexo" value="Mujer" type="radio" id="mujer" 
                                v-model="persona.sexo"/>
                            <label for="mujer">Mujer</label>
                        </div>
                    </div>
                    <button class="botonIngreso" :disabled="!formOk" type="submit" @click.prevent="agregarPersona" 
                        onclick="document.getElementById('alerta').style.display='block';" >
                        Finalizaste? 
                        <span class="span">Ingresa los datos</span>
                    </button>
                </form>
            </div>
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
                    apellido: '',
                    edad: '',
                    telefono: '',
                    sexo: '', 
                    gustos: ''
                },
                mensaje: false
            }
        },
        computed: {
            formOk() {
                return this.persona.nombre && this.persona.apellido && this.persona.edad 
                && this.persona.telefono && this.persona.sexo && this.persona.gustos;
            }
        },
        methods: {
            agregarPersona(){
                this.$emit('agregarPersona', Object.assign({}, this.persona));
                this.limpiarPersona();
            },
            //Limpia los campos de texto luego de ingresar la persona
            limpiarPersona() {
                this.persona.nombre = '';
                this.persona.apellido = '';
                this.persona.edad = '';
                this.persona.telefono = '';
                this.persona.sexo = '';
                this.persona.gustos = '';
            }
        }
    }
</script>

<style>
    
</style>