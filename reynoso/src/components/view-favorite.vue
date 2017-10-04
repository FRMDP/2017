<template>
    <div name="Favoritos" >
        <div class="row">
            <h2>Lista de favoritos </h2>
        </div>
        <hr>
        <div id="personfavfilter" v-if="personFavFilter.length > 0">
            <div class="col-sm-6" v-for="person in personFavFilter">
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
                                    <button class="btn btn-info" @click="changeFavorite(person)">
                                        <span class="glyphicon glyphicon-star-empty"></span><span class="glyphicon glyphicon-minus"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <h3 v-else class="col-sm-6">No hay favoritos</h3>
    </div>

</template>

<script>
    export default{
        name: "viewFavorite",
        props:['person','persons'],
        data(){
            return{
                filter:'',
            }
        },
        computed:{
            personFavFilter(){
                return this.persons.filter(person=> person.favorite==true);
            },
        },
        methods:{
            changeFavorite(person){
                this.$emit("changeFavorite",person);
            }
        },
    }
</script>

<style>
</style>