<template>
    <div>
        <h3 class="titulo">Modificar Persona</h3>
        <h4 class="subindice">*Tilde campos a editar</h4>
        <zp-alert :messageAlert='messageAlert' :alert='alert' @changeAlert='changeAlert' :classAlert='classAlert'></zp-alert>
        <div class="row" >
            <form class="marginTop col s12">
                <div class="row">
                    <div class="col s6">
                        <input type="checkbox" id='chkbNombre' value="Nombre" v-model="checkedBox"/>
                        <label for='chkbNombre'>Nombre</label>
                        <input placeholder="Nombre" id="first_name" type="text" :disabled="checkedBox.indexOf('Nombre')<0" class="validate" v-model="person.name">
                    </div>
                    <div class="col s6">
                        <input type="checkbox" id='chkbApellido' value="Apellido" v-model="checkedBox"/>
                        <label for='chkbApellido'>Apellido</label>
                        <input id="last_name" type="text" class="validate" placeholder="Apellido" :disabled="checkedBox.indexOf('Apellido')<0" v-model="person.surname">
                    </div>
                </div>
                <div class="row">
                    <div class="col s6">
                        <input type="checkbox" id='chkbTelefono' value="Telefono" v-model="checkedBox"/>
                        <label for='chkbTelefono'>Telefono</label>
                        <input id="telefono" type="number" class="validate" placeholder="Telefono" :disabled="checkedBox.indexOf('Telefono')<0" v-model="person.phone">
                    </div>  
                    <div class="col s6">
                        <input type="checkbox" id='chkbDireccion' v-model="checkedBox" value="Direccion"/>
                        <label for='chkbDireccion'>Direccion</label>
                        <input id="direccion" type="text" class="validate" placeholder="Direccion" :disabled="checkedBox.indexOf('Direccion')<0" v-model="person.address">
                    </div>  
                </div>
                <div class="row">
                    <div class="col s12">
                        <input type="checkbox" id='chkbEmail' v-model="checkedBox" value="Email"/>
                        <label for='chkbEmail'>Email</label>
                        <input id="email" type="email" class="validate" placeholder="E-Mail" :disabled="checkedBox.indexOf('Email')<0" v-model="person.mail">
                    </div>
                </div>
                <div class="row">
                    <h4 class="subtitulo">Sexo</h4>
                    <p><input class="with-gap" name="group2" type="radio" :checked="person.sex == 'Masculino'" id="test5" value="Masculino" v-model="person.sex" />
                    <label for="test5">Masculino</label></p>
                    <p><input class="with-gap" name="group2" type="radio" :checked="person.sex == 'Femenino'" id="test6" value="Femenino" v-model="person.sex"/>
                    <label for="test6">Femenino</label></p>
                </div>
                <button class="btn waves-effect waves-light" type="submit" name="action" @click.prevent="modPerson">Modificar
                    <i class="material-icons right">edit</i>
                </button>
            </form>
        </div>
    </div>  
</template>

<script>
    import zpAlert from './zp-alert.vue'; 

    export default {
    	name: 'zpModperson',
        props: ['person'],
        components: {
            zpAlert
        },
        data(){
            return {
                checkedBox: [],
                alert: false,
                messageAlert: 'FELICITACIONES!!!! Modificaste con éxito a la persona!!',
                classAlert: 'alert-info'
            }
        },
        methods:{
            changeAlert(){
                this.alert = !this.alert;
            },
            cleanFields(){
                this.person.id = '';
                this.person.name = '';
                this.person.surname = '';
                this.person.phone = '';
                this.person.address = '';
                this.person.mail = '';
                this.person.sex = '';
                this.person.fav = '';
            },
            modPerson(){
                this.$emit('modPerson', Object.assign({},this.person));
                this.changeAlert();
                this.cleanFields();
            }
        }
    }
</script>