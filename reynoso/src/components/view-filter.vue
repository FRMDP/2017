<template>
    <div name="Buscar">
        <div class="row">
            <h2>Filtre su busqueda por nombre </h2>
            <div class="col-sm-4">
                <input class="form-control" type="text" v-model="filter" placeholder="Busqueda">
            </div>
        </div>
        <hr>
        <div v-if="personsFilter.length > 0">
            <div class="col-sm-6" v-for="person in personsFilter">
                <div class="panel panel-default">
                    <div class="panel-body">
                        <div class="media">
                            <div class="media-left">
                                <img class="media-object" :src="person.genderlink">
                            </div>
                            <div class="media-body">
                                <div class="col-md-9">
                                    <ul>
                                        <li>Nombre: {{person.name}}</li>
                                        <li>Apellido: {{person.lastname}}</li>
                                        <li>Edad: {{person.age}}</li>
                                        <li>Telefono: {{person.phone}}</li>
                                    </ul>
                                </div>
                                <div class="col-md-3">
                                    <button class="btn btn-info" @click="deletePerson(person);"><span class="glyphicon glyphicon-remove"></span>
                                    </button>
                                </div>
                                <div class="col-md-3">
                                    <div v-if="person.favorite">
                                        <button class="btn btn-info" @click="changeFavorite(person)" margin-top="20px">
                                            <span class="glyphicon glyphicon-minus"></span> <span class="glyphicon glyphicon-star"></span>
                                        </button>
                                    </div>
                                    <div v-else>
                                        <button class="btn btn-info" @click="changeFavorite(person)" margin-top="20px">
                                            <span class="glyphicon glyphicon-plus"></span> <span class="glyphicon glyphicon-star"></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <h3 v-else >No hay Contactos</h3>
    </div>

</template>

<script>
    export default{
        name:"viewFilter",
        props:['person','persons'],
        data(){
            return{
                filter:'',
            }
        },
        computed:{
            personsFilter() {
                return this.persons.filter(person => person.name.toUpperCase().indexOf(this.filter.toUpperCase())>=0);
            },
        },
        methods:{
            deletePerson(person){
                this.$emit("deletePerson",person);
            },
            changeFavorite(person){
                this.$emit("changeFavorite",person);
            }
        },
    }
</script>

<style>
</style>