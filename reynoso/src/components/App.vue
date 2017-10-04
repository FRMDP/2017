<template>
    <div class="app">
        <menu-bar @changeView="changeView"></menu-bar>
        <div class="container">
            <view-start v-if="view == 'start'" @changeView="changeView"></view-start>
            <view-add v-if="view == 'add'" @changeView="changeView" @addPerson="addPerson" :person="person" :persons="persons"></view-add>
            <view-filter v-if="view == 'filter'" @changeView="changeView" @deletePerson="deletePerson" @changeFavorite="changeFavorite" :person="person" :persons="persons"></view-filter>
            <view-favorite v-if="view == 'favorite'" @changeView="changeView" @changeFavorite="changeFavorite" :person="person" :persons="persons"></view-favorite>
            <view-seeall v-if="view == 'seeall'" @changeView="changeView" @deletePerson="deletePerson" @changeFavorite="changeFavorite" :person="person" :persons="persons"></view-seeall>
        </div>
    </div>
</template>

<script>
    import menuBar from './menu-bar.vue';
    import viewStart from './view-start.vue';
    import viewAdd from './view-add.vue';
    import viewFilter from './view-filter.vue';
    import viewFavorite from './view-favorite.vue';
    import viewSeeall from './view-seeall.vue';

    export default {
    	name: 'app',
    	components: {
            menuBar,
            viewStart,
            viewAdd,
            viewFilter,
            viewFavorite,
            viewSeeall,
    	},
    	data() {
    		return {
    		    view: 'start',
                person: {
    		        id: '',
                    name: '',
                    lastname: '',
                    age: '',
                    phone: '',
                    gender: '',
                    genderlink: '',
                    favorite: false
                },
                persons: [],
                lastid:1,
    		}
    	},
    	methods: {
            changeView(view){
                this.view= view;
            },
            addPerson(person){
                person.id=this.lastid;
                this.lastid++;
                this.persons.push(person);
                this.addPersonsLocalStorage();
            },
            addPersonsLocalStorage(){
                localStorage.setItem('persons', JSON.stringify(this.persons));
            },
            getPersonsLocalStorage(){
                const people = localStorage.getItem('persons');
                if (people) {
                    this.persons = JSON.parse(people);
                    this.lastid = this.persons[(this.persons.length-1)].id + 1;
                }
            },
            findPosition(person){
                let position = 0;
                while(this.persons[position].id != person.id) position++;
                return position;
            },
            deletePerson(person){
                const position= this.findPosition(person);
                this.persons.splice(position,1);
                if(this.persons.length == 0)
                    localStorage.clear();
                else{
                    this.addPersonsLocalStorage();
                }
            },
            changeFavorite(person){
                const position= this.findPosition(person);
                this.persons[position].favorite= !person.favorite;
                this.addPersonsLocalStorage();
            },
    	},
        mounted(){
            this.getPersonsLocalStorage();
        },

    }
</script>

<style>

</style>
