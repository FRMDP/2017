new Vue({
  el: '#app',
  data: {
    person: {
    	name: '',
      lastname,
    	age: '',
      phone: '',
    	gender: ''
    },
    persons: [],
    filter: '',
    view: 'start',
    message: false
  },
  computed: {
  	personsFilter() {
  		return this.persons.filter(person => person.name.indexOf(this.filter) >= 0);
  	},
  	formOk() {
  		return this.person.name && this.person.lastname && this.person.age && this.person.phone && this.person.gender;
  	}
  },
  methods: {
  	agregarPersona() {
  		this.persons.push(Object.assign({}, this.persona));
      this.persons
  		this.cleanPerson();
  		this.message = true;
  	},
  	cleanPerson() {
  		this.person.name = '';
      this.person.lastname='';
  		this.person.age = '';
      this.person.phone='';
  		this.person.gender = '';
  	},
  	changeView(view) {
  		this.view = view;
  	},
  	closeMessage() {
  		this.message = false;
  	}
  }
})