const vm = new Vue({
    el: '#app',
    data: {
        person: {
            firstName: '',
            lastName: '',
            age: '',
            description: '',
            gender: ''
        },
        people: [],
        filter: '',
        view: 'add'
    },
    computed: {
        filteredPerson() {
            return this.people.filter(p => p.firstName.indexOf(this.filter) >= 0);
        },
        formOk() {
            return this.person.firstName &&
                this.person.lastName &&
                this.person.age &&
                this.person.description &&
                this.person.gender;
        }
    },
    methods: {
        addPerson() {
            this.people.push(Object.assign({}, this.person));
            this.cleanPerson();
            this.message = true;
        },
        cleanPerson() {
            this.person.firstName = '';
            this.person.age = '';
            this.person.gender = '';
        },
        changeView(view) {
            this.view = view;
        }
    }
});