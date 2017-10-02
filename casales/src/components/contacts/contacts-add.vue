<template>
	<section class="section">
		<div class="container">
			<div class="columns is-mobile">
				<div class="column is-half is-offset-one-quarter">
					<div class="box has-text-centered">
						<h6 class="title is-6">Add a new contact</h6>
					</div>
					<form class="box">
						<div class="field">
							<label class="label">First name</label>
							<div class="control">
								<input class="input" placeholder="Insert first name" v-model="contact.firstName">
							</div>
						</div>

						<div class="field">
							<label class="label">Last name</label>
							<div class="control">
								<input class="input" placeholder="Insert last name" v-model="contact.lastName">
							</div>
						</div>

						<div class="field">
							<label class="label">Address</label>
							<div class="control">
								<input class="input" placeholder="Insert Address" v-model="contact.address">
							</div>
						</div>

						<div class="field">
							<label class="label">Phone</label>
							<div class="control">
								<input class="input" type="number" placeholder="Add phone number"
								       v-model="contact.telephoneNumber">
							</div>
						</div>

						<div class="field">
							<div class="control">
								<button class="button is-medium is-primary is-outlined" :disabled="!formOk"
								        @click.prevent="addContact">Add
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
    export default {
        name: 'contactsAdd',
        data() {
            return {
                contact: {
                    firstName: '',
                    lastName: '',
                    address: '',
                    telephoneNumber: '',
                    fave: false
                }
            }
        },
        computed: {
            formOk() {
                return this.contact.firstName &&
                    this.contact.lastName &&
                    this.contact.address &&
                    this.contact.telephoneNumber;
            }
        },
        methods: {
            addContact() {
                this.contact.firstName = this.firstToUpper(this.contact.firstName);
                this.contact.lastName = this.firstToUpper(this.contact.lastName);
                this.contact.address = this.firstToUpper(this.contact.address);

                this.$emit('addContact', this.contact);

                this.cleanContactFields();

                this.$emit('displayAlert', 'The contact has been created.');
            },
            cleanContactFields() {
                this.contact.firstName = '';
                this.contact.lastName = '';
                this.contact.address = '';
                this.contact.telephoneNumber = '';
            },
            firstToUpper(string) {
                return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
            }
        }
    }
</script>
