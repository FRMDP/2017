new Vue({
    el: '#app',
    data: {
        person: {
            name: '',
            lastname: '',
            age: '',
            phone: '',
            gender: '',
            genderlink: '',
            favorite: false
        },
        persons: [],
        filter: '',
        view: 'start',
        message: false,
        messageFav: false,
        sortedpersons: [],
        sortby: 'name'
    },
    computed: {
        personsFilter() {
            return this.persons.filter(person => person.name.toUpperCase().indexOf(this.filter.toUpperCase())>=0);
        },
        personFavFilter(){
            return this.persons.filter(person=> person.favorite==true);
        },
        formOk() {
            return this.person.name && this.person.lastname && this.person.age && this.person.phone && this.person.gender;
        },
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
    methods: {
        addPerson() {
            this.person.genderlink = this.addGenderIcon();
            this.persons.push(Object.assign({}, this.person));
            this.addPersonsLocalStorage();
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
                return "style/img/male.png";
            }
            return "style/img/female.png";
        },
        changeView(view) {
            this.view = view;
        },
        addPersonFav(person){
            this.person.favorite = true;
            this.messageFav = true;
        },
        closeMessageFav(){
            this.messageFav = false;
        },
        closeMessage() {
            this.message = false;
        },
        closeFav(person){
            this.person.favorite = false;
        },
        getPersonsLocalStorage(){
            const people = localStorage.getItem('persons');
            console.log(people);
            if (people) {
                this.persons = JSON.parse(people);
            }
        },
        addPersonsLocalStorage(){
            localStorage.setItem('persons', JSON.stringify(this.persons));
        },
        deletePerson(index){
            this.persons.splice(index,1);
            this.addPersonsLocalStorage();
        },
    },
    mounted(){
        this.getPersonsLocalStorage();
    },
})