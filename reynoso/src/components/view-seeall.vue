<template>
    <div name="verTodos" >
        <div class="row">
            <h2>Ordenar por: </h2>
        </div>
        <div class="row">
            <div class="col-sm-2">
                <label for="nom"><h4>Nombre:</h4></label>
            </div>
            <div class="col-sm-1">
                <input spellcheck="true" class="form-control" type="radio" value="name" v-model="sortby" name="ordenar" id="nom">
            </div>
            <div class="col-sm-2">
                <label for="ape"><h4>Apellido:</h4></label>
            </div>
            <div class="col-sm-1">
                <input type="radio" class="form-control" value="lastname" v-model="sortby" name="ordenar" id="ape">
            </div>
        </div>
        <hr>
        <div class="col-sm-6" v-for="(person, index) in sortPersonsBy">
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
</template>

<script>
    export default{
        name:"viewSeeall",
        props:['person','persons'],
        data(){
            return{
                sortby:'name',
            }
        },
        computed:{
            sortPersonsBy(){
                return this.persons.sort((a, b) => {
                    let nameA = a[this.sortby].toUpperCase();
                    let nameB = b[this.sortby].toUpperCase();
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    return 0;
                });
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