<template>
    <div id="buscarPersona">
        <h3 class="titulo">Buscar Persona</h3>
        <div class="row">
            <div class="input-field col s12">
                <input id="buscar" type="text" class="validate" placeholder="Buscar" v-model="filter">
            </div>
        </div>
        <zp-alert v-show="persons.length == 0" :messageAlert='messageAlert' :alert='alert' :classAlert='classAlert'></zp-alert>
        <!-- CARD -->
        <div class="row">
            <transition-group name="fade">
                <zp-card v-for="p in personFilter" :key="p.id" :person="p" @deletePerson="deletePerson" @changeFav="changeFav" @loadPersonM="loadPersonM" @changeView="changeView"></zp-card>
            </transition-group>
        </div>
    </div>
</template>

<script>
    import zpAlert from './zp-alert.vue';
    import zpCard from './zp-card.vue'
    
    export default {
        name: 'zpSearchperson',
        props: ['persons'],
        components: {
            zpAlert,
            zpCard
        },
        data(){
            return {
                filter: '',
                alert:true,
                classAlert: 'alert-info',
                messageAlert: 'SORRY!! No hay personas guardadas!',
            }
        },
        computed:{
            personFilter(){
                return this.persons.filter(p => (p.name.toUpperCase().indexOf(this.filter.toUpperCase()) >= 0) || p.surname.toUpperCase().indexOf(this.filter.toUpperCase()) >= 0
                    || p.address.toUpperCase().indexOf(this.filter.toUpperCase()) >=0 || p.mail.toUpperCase().indexOf(this.filter.toUpperCase()) >= 0
                    || p.phone.indexOf(this.filter) >= 0 || p.sex.toUpperCase().indexOf(this.filter.toUpperCase()) >= 0);
            }
        },
        methods: {
            deletePerson(payload){
                this.$emit('deletePerson', payload);
            },
            changeFav(payload){
                this.$emit('changeFav', payload);
            },
            changeView(payload){
                this.$emit('changeView', payload);
            },
            loadPersonM(payload){
                console.log(payload)
                this.$emit('loadPersonM', payload);
            }
        }
    }
</script>

<style>

</style>