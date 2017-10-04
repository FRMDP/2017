<template>
    <!--Search Contacts Section-->
    <div class="container center">
        <div class="row">
            <div class="col s12 m9 offset-m2">
                <h3 class="left-align">Search Contacts</h3>
                <div class="divider"></div>
            </div>
        </div>
        <div class="row">
            <div class="col s12 m9 offset-m2">
                <div class="input left-align">
                    <label for="find">Search</label>
                    <input id="find" type="text" v-model="filter" :disabled="!contactList.length">
                </div>
            </div>
        </div>
        <div class="row" v-if="!contactList.length">
            <h4>The contact book is empty</h4>
        </div>
        <div class="row" v-show="contactList.length" v-if="!searchedContacts.length">
            <h4>The contact you are seeking is not on the list</h4>
        </div>
        <div v-else v-for="contact in searchedContacts">
            <div class="row">
                <div class="col s12 m9 offset-m2">
                    <div class="card default-primary-color">
                        <div class="card-content white-text">
                            <span class="card-title">{{ contact.givenName }} {{ contact.surName }}</span>
                            <p>Address: {{ contact.address }}</p>
                            <p>D.O.B: {{ contact.birthdate }}</p>
                            <p>Phone Number: {{ contact.number }}</p>
                            <p>Gender: {{ contact.gender }}</p>
                        </div>
                        <div class="card-action">
                            <a class="waves-effect waves-light btn modal-trigger grey white-text" @click="setToDelete(contact)">Delete</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'sbContactsSearch',
        props: ['contactList'],
        data () {
            return {
                filter: ''
            }
        },
        computed: {
            searchedContacts() {
                return this.contactList.filter(c => c.givenName.toLowerCase().indexOf(this.filter) >= 0 ||
                c.surName.toLowerCase().indexOf(this.filter) >= 0 ||
                c.address.toLowerCase().indexOf(this.filter) >= 0 ||
                c.gender.indexOf(this.filter) >= 0 ||
                c.birthdate.indexOf(this.filter) >= 0 ||
                c.number.indexOf(this.filter) >= 0);
            },
        },
        methods: {
            setToDelete(contact) {
                this.$emit('setToDelete', this.contact);
            }
        }
    }
</script>