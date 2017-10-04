<template>
    <!--Add Contact Section-->
    <div class="container">
        <div class="row">
            <div class="col s12">
                <h3 class="left-align">Add New Contact</h3>
                <div class="divider"></div>
            </div>
        </div>
        <div class="row">
            <div class="col s12">
                <div class="row">
                    <div class="input-field col s6">
                        <input id="givenName" type="text" class="validate" v-model="contact.givenName">
                        <label for="givenName">First Name</label>
                    </div>
                    <div class="input-field col s6">
                        <input id="surName" type="text" class="validate" v-model="contact.surName">
                        <label for="surName">Last Name</label>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="address" type="text" class="validate" v-model="contact.address">
                            <label for="address">Address</label>
                        </div>
                    </div>
                    <div class="row">
                        <input class="with-gap validate" name="genderSelect" type="radio" id="male" value="m" v-model="contact.gender"/>
                        <label for="male">Male</label>
                        <input class="with-gap validate" name="genderSelect" type="radio" id="female" value="f" v-model="contact.gender"/>
                        <label for="female">Female</label>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <label for="birthdate">Date of Birth</label>
                            <input id="birthdate" type="date" class="validate right-align" v-model="contact.birthdate">
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="number" type="number" class="validate" v-model="contact.number" number>
                            <label for="number">Telephone</label>
                        </div>
                    </div>
                    <div class="row">
                        <a class="btn-floating waves-effect waves-light grey btn-large right" :disabled="!formIsCorrect"
                           @click.prevent="addContact"><i class="fa fa-2x fa-plus"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'sbContactsAdd',
        data () {
            return {
                contact: {
                    givenName: '',
                    surName: '',
                    address: '',
                    gender: '',
                    birthdate: '',
                    number: null
                }
            }
        },
        computed: {
            formIsCorrect() {
                return !!(this.contact.givenName &&
                this.contact.surName &&
                this.contact.address &&
                this.contact.gender &&
                this.contact.birthdate &&
                this.contact.number);
            }
        },
        methods: {
            addContact(){
                this.contact.givenName = this.firstCharToUpper(this.contact.givenName);
                this.contact.surName = this.firstCharToUpper(this.contact.surName);
                this.contact.gender = this.firstCharToUpper(this.contact.gender);
                this.$emit('addContact', this.contact);
                this.resetContact();
                this.$emit('showPopUpAlert', 'Contact added successfully!');
            },
            resetContact() {
                this.contact.givenName = '';
                this.contact.surName = '';
                this.contact.birthdate = '';
                this.contact.address = '';
                this.contact.gender = '';
                this.contact.number = null;
            },
            firstCharToUpper(string) {
                return string.charAt(0).toUpperCase() + string.slice(1);
            }
        }
    }
</script>