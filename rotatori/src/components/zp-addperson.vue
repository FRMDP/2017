<template>
    <div class="row" v-show="optionView == 'addPerson'">
        <zp-alert v-show="alert == true" :messageAlert='messageAlert' :classAlert='classAlert'></zp-alert>
        <h3 class="titulo">Nueva Persona</h3>
        <form class="col s12">
            <div class="row">
                <div class="input-field col s6">
                    <i class="material-icons prefix">person</i>
                    <input placeholder="Nombre" id="nombre" type="text" class="validate" v-model="person.name">
                </div>
                <div class="input-field col s6">
                    <i class="material-icons prefix">person</i>
                    <input placeholder="Apellido" id="apellido" type="text" class="validate" v-model="person.surname">
                </div>
            </div>
            <div class="row">
                <div class="input-field col s6">
                    <i class="material-icons prefix">phone</i>
                    <input type="number" class="validate" placeholder="Telefono" v-model="person.phone">
                </div>
                <div class="input-field col s6">
                    <i class="material-icons prefix">location_city</i>
                    <input type="text" class="validate" placeholder="Direccion" v-model="person.address">
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <i class="material-icons prefix">email</i>
                    <input type="email" class="validate" placeholder="E-Mail" v-model="person.mail">
                </div>
            </div>
            <div class="row">
                <h4 class="subtitulo">Sexo</h4>
                <p><input class="with-gap" name="group1" type="radio" id="test3" value="Masculino" v-model="person.sex" />
                <label for="test3">Masculino</label></p>
                <p><input class="with-gap" name="group1" type="radio" id="test4" value="Femenino" v-model="person.sex" />
                <label for="test4">Femenino</label></p>
            </div>
            <button :disabled="!formOk" class="btn waves-effect waves-light" type="submit" name="action" @click.prevent="addPerson">Guardar
                <i class="material-icons right">send</i>
            </button>
        </form>
    </div>  
</template>

<script>
    import zpAlert from './zp-alert.vue';
    
    export default {
    	name: 'zpAddperson',
        props: ['optionView'],
         components: {
            zpAlert
        },
        data(){
            return {
                person: {
                    id: '',
                    name: '',
                    surname: '',
                    phone: '',
                    address: '',
                    mail: '',
                    sex: '',
                    fav: ''
                },
                alert: false,
                messageAlert: 'FELICITACIONES!!!! Agregaste una nueva persona!!',
                classAlert: 'alert-success'
            }
        },
        computed: {
            formOk(){
                return this.person.name && this.person.surname && this.person.phone && this.person.address
                    && this.person.mail && this.person.sex;
            }
        },
        methods:{
            addPerson(){
                this.person.fav = false;
                this.$emit("addPerson", Object.assign({}, this.person));
                this.cleanFields();
                this.changeAlert();
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
            changeAlert(){
                this.alert = !this.alert;
            }
        }
    }

</script>

<style>

</style>