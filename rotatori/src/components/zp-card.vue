<template>
    <div class="col s6">
        <div  class="card blue-grey darken-1 cuadroSombra">
            <div class="card-content white-text">
                <span class="card-title">{{ person.surname }}, {{ person.name }}</span>
                <p>Telefono: {{ person.phone }}</p>
                <p>Direccion: {{ person.address }}</p>
                <p>Email: {{ person.mail }}</p>
                <p>Sexo: {{ person.sex }}</p>
            </div>
            <div class="card-action">
                <a class="waves-effect waves-light btn" @click="deletePerson()"><i class="material-icons left">remove</i>Borrar</a>
                <a class="waves-effect waves-light btn"  @click="modifPersonFull()"><i class="material-icons left">edit</i>Modificar</a>
                <a v-if="person.fav==false" class="waves-effect waves-light btn"  @click="changeFav()">Añadir a mi <i class="material-icons right">favorite</i></a>
                <a v-else class="waves-effect waves-light btn"  @click="changeFav()">Quitar de mi <i class="material-icons right">favorite_border</i></a>
            </div>
        </div>  
    </div>      
</template>

<script>
   
    export default {
        name: 'zpCard',
        props: ['person'],
        data(){
            return {

            }
        },
        methods: {
            deletePerson(){
                this.$emit('deletePerson', this.person.id);
            },
            changeFav(){
                this.$emit('changeFav', this.person.id);
            },
            changeView(){
                this.$emit('changeView', 'modPerson');
            },
            loadPersonM(){
                this.$emit('loadPersonM', this.person);
            },
            modifPersonFull(){
                this.changeView();
                this.loadPersonM();
            }
        }
    }
</script>