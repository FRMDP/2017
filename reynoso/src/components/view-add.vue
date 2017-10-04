<template>
    <div name="agregar">
        <div class="row">
            <h2>Agregue personas a su agenda</h2>
        </div>
        <div class="row">
            <form class="form-horizontal">
                <div class="form-group">
                    <label class="control-label col-sm-2" for="name">Nombre:</label>
                    <div class="col-sm-8">
                        <input v-model="person.name" type="text" class="form-control" placeholder="Ingrese Nombre" id="name">
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label col-sm-2" for="lastname">Apellido:</label>
                    <div class="col-sm-8">
                        <input v-model="person.lastname" type="text" class="form-control" placeholder="Ingrese Apellido" id="lastname">
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label col-sm-2" for="age">Edad:</label>
                    <div class="col-sm-8">
                        <input v-model="person.age" type="number" class="form-control" placeholder="Ingrese Edad" id="age">
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label col-sm-2" for="phone">Phone:</label>
                    <div class="col-sm-8">
                        <input v-model="person.phone" type="number" class="form-control" placeholder="Ingrese Nro de Teléfono" id="phone">
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label col-sm-2">Hombre:</label>
                    <div class="col-md-2">
                        <input v-model="person.gender" type="radio" value="h" class="form-control" name="gender">
                    </div>
                    <label class="control-label col-sm-2">Mujer:</label>
                    <div class="col-md-2">
                        <input v-model="person.gender" type="radio" value="m" class="form-control" name="gender">
                    </div>
                </div>
                <div class="col-md-offset-2">
                    <button class="btn btn-default" :disabled="!formOk" type="submit" @click.prevent="addPerson">Guardar</button>
                </div>
            </form>
        </div>
        <hr>
        <div class="row" v-if="message">
            <div class="col-sm-offset-3 col-sm-6">
                <div class="alert alert-success alert-dismissable" >
                    <strong>Persona agregada!</strong>
                    <a class="close" data-dismiss="alert" @click="closeMessage"><span class="glyphicon glyphicon-remove"></span></a>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default{
        name: "viewAdd",
        props:['person','persons'],
        data(){
            return{
                message:false,
            }
        },
        computed:{
            formOk() {
                return this.person.name && this.person.lastname && this.person.age && this.person.phone && this.person.gender;
            },
        },
        methods:{
            addPerson() {
                this.person.genderlink = this.addGenderIcon();
                this.$emit("addPerson",(Object.assign({}, this.person)));
                this.cleanPerson();
                this.message = true;
            },
            cleanPerson() {
                this.person.name = '';
                this.person.lastname = '';
                this.person.age = '';
                this.person.phone = '';
                this.person.gender = '';
                this.person.favorite=false;
            },
            addGenderIcon(){
                if (this.person.gender == "h") {
                    return "img/male.png";
                }
                return "img/female.png";
            },
            closeMessage() {
                this.message = false;
            },
        }
    }
</script>

<style>
</style>