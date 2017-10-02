<template>
    <div class='app'>
        <zp-menu @toggleMenu="toggleMenu" ></zp-menu>
        <zp-sidemenu :isMenuOpen="isMenuOpen" @changeView="changeView"></zp-sidemenu>
        <zp-addperson :optionView="optionView" @addPerson="addPerson"></zp-addperson>
        <zp-searchperson :optionView="optionView" :persons="persons" @deletePerson="deletePerson" @changeFav="changeFav" @changeView="changeView" @loadPersonM="loadPersonM"></zp-searchperson>
        <zp-favorite :optionView="optionView" :persons="persons" @deletePerson="deletePerson" @changeFav="changeFav" @changeView="changeView"></zp-favorite>
        <zp-modperson :optionView="optionView" :person="person" @modPerson="modPerson"></zp-modperson>
    </div>
</template>

<script>
    import zpMenu from './zp-menu.vue';
    import zpSidemenu from './zp-sidemenu.vue';
    import zpAddperson from './zp-addperson.vue';
    import zpSearchperson from './zp-searchperson.vue';
    import zpFavorite from './zp-favorite.vue';
    import zpModperson from './zp-modperson.vue';
    
    export default {
    	name: 'app',
        components: {
            zpMenu,
            zpSidemenu,
            zpAddperson,
            zpSearchperson,
            zpFavorite,
            zpModperson
        },
        data(){
            return {
                isMenuOpen: false,
                optionView : 'addPerson',
                persons: [],
                lastId: 1,
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
            }
        },
        methods: {
    		toggleMenu() {
    			this.isMenuOpen = !this.isMenuOpen;
            },
            changeView(payload){
                this.optionView = payload;
                if(payload != 'modPerson')
                    this.toggleMenu();
            },
            updateLocalStorage(){
                let text = JSON.stringify(this.persons);
                localStorage.setItem("contacts", text);
            },
            addPerson(payload){
                payload.id = this.lastId;
                this.lastId++;
                this.persons.push(payload);
                this.updateLocalStorage();
            },
            searchPos(id){
                let pos = 0;
                while(this.persons[pos].id != id){
                    pos++;
                }
                return pos;
            },
            deletePerson(payload){
                if(confirm("¿Realmente desea borrar al contacto")){
                    let pos = this.searchPos(payload);
                    this.persons.splice(pos,1);
                    if(this.persons.length == 0){
                        localStorage.clear();
                    }
                    else{
                        this.updateLocalStorage();
                    }
                }
            },
            changeFav(payload){
                let pos = this.searchPos(payload);
                this.persons[pos].fav = !this.persons[pos].fav;
                this.updateLocalStorage();
            },
            modPerson(payload){
                let pos = this.searchPos(payload.id);
                this.persons[pos] = payload;
                this.updateLocalStorage();
            },
            loadPersonM(payload){
                this.person = payload;
            }
        },
        mounted(){
            if(JSON.parse(localStorage.getItem("contacts")) != null){
                this.persons = JSON.parse(localStorage.getItem("contacts"));
                this.lastId = this.persons[(this.persons.length-1)].id + 1;
            }
        }
    }
</script>