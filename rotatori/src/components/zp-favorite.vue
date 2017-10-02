<template>
    <div id="verFavoritos" v-show="optionView == 'favorite'">
        <h3 class="titulo">Ver Favoritos</h3>
        <div class="row">
            <br>
        </div>
        <zp-alert v-show="cantFavorites == 0" :messageAlert='messageAlert' :alert='alert' :classAlert='classAlert'></zp-alert>
        <!-- CARD -->
        <div class="row">
            <transition-group name="fade">
                <zp-card v-for="p in personsFavorites" :key="p.id" :person="p" @deletePerson="deletePerson" @changeFav="changeFav" @changeView="changeView"></zp-card>
            </transition-group>
        </div>
    </div>
</template>

<script>
    import zpAlert from './zp-alert.vue';
    import zpCard from './zp-card.vue'
    
     export default {
    	name: 'zpFavorite',
        props: ['persons','optionView'],
        components: {
            zpAlert,
            zpCard
        },
        data(){
            return {
                alert: true,
                classAlert: 'alert-info',
                messageAlert: 'SORRY!! No hay personas favoritas!'
            }
        },
        computed: {
            personsFavorites(){
                return this.persons.filter(p => (p.fav == true));
            },
            cantFavorites(){
                return this.persons.filter(p => (p.fav) == true).length;
            }
        },
        methods:{
            deletePerson(payload){
                this.$emit('deletePerson', payload);
            },
            changeFav(payload){
                this.$emit('changeFav', payload);
            },
            changeView(){
                this.$emit('changeView', 'modPerson');
            }
        }
    }
</script>

<style>

</style>