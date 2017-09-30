<template>
    <div class="vista-editar">
            <div class="row">
                <div class="col s12 l6 offset-m1 offset-l3 hoja">
                    <h3>Editar el contacto</h3>
                    <form>
                        <input v-model="personaEditar.nombre" type="text" id="first_name" placeholder="Ingrese Nombre">
                        <input v-model="personaEditar.apellido" type="text" id="last_name" 
                            placeholder="Ingrese Apellido">
                        <input type="number" placeholder="Ingrese Edad" id="age" v-model="personaEditar.edad">
                        <input type="number" placeholder="Ingrese Telefono" id="phone" 
                            v-model="personaEditar.telefono">
                        <textarea id="textarea" v-model="personaEditar.gustos" class="materialize-textarea" 
                            placeholder="Ingrese de forma breve sus gustos">
                        </textarea>
                        <label for="sexo">Indique sexo</label>
                        <div class="row" id="sexo">
                            <div class="col l4">
                                <input class="with-gap" name="sexo" value="Varon" type="radio" id="varon" 
                                    v-model="personaEditar.sexo"/>
                                <label for="varon">Varon</label>
                                <input class="with-gap" name="sexo" value="Mujer" type="radio" id="mujer" 
                                    v-model="personaEditar.sexo"/>
                                <label for="mujer">Mujer</label>
                            </div>
                        </div>
                        <button class="botonIngreso" :disabled="!formOk" type="submit" @click.prevent="editarPersona" 
                            onclick="document.getElementById('alerta2').style.display='block';" >
                            Finalizaste? 
                            <span class="span">Edita los datos</span>
                        </button>
                    </form>
                </div>
            </div>
    </div>
</template>

<script>
    export default {
        name: 'vistaEditar',
        props: ['personaEditar'],
        data() {
            return {
                vista: 'editar',
                mensaje: false
            }
        },
        computed: {
            formOk() {
                return this.personaEditar.nombre && this.personaEditar.apellido && this.personaEditar.edad 
                && this.personaEditar.telefono && this.personaEditar.sexo && this.personaEditar.gustos;
            }
        },
        methods: {
            editarPersona(){
                this.$emit('editarPersona', this.personaEditar);
                this.mensaje = true;
            }
        }
    }
</script>

<style>
    
</style>