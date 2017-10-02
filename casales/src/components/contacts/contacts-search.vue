<template>
	<section class="section">
		<div class="container">
			<div class="columns is-desktop">
				<div class="column is-8 is-offset-2">
					<div class="box">
						<div class="field">
							<div class="control has-icons-left">
								<input class="input" placeholder="Search by name ..." v-model="filter">
								<span class="icon is-small is-left"><i class="fa fa-search"></i></span>
							</div>
						</div>
					</div>
					<div class="notification is-primary" v-if="!contacts.length">
						<strong>There are no contacts.</strong>
					</div>
				</div>
			</div>
			<div v-if="contacts.length">
				<div class="columns is-desktop is-multiline is-centered">
					<div class="notification is-primary" v-if="!filteredContacts.length">
						Couldn't find anything !
					</div>
					<div class="column is-4" v-for="(contact, index) in filteredContacts">
						<div class="card">
							<header class="card-header">
								<p class="card-header-title">
									{{ contact.firstName }} {{ contact.lastName }}
								</p>
								<a @click="addOrRemoveContactToFavorites(contact)" v-if="!contact.fave"
								   class="card-header-icon" aria-label="more options">
									<span class="icon">
										<i class="fa fa-star-o" aria-hidden="true"></i>
									</span>
								</a>
								<a @click="addOrRemoveContactToFavorites(contact)" v-else class="card-header-icon"
								   aria-label="more options">
									<span class="icon">
										<i class="fa fa-star" aria-hidden="true"></i>
									</span>
								</a>
							</header>
							<div class="card-content">
								<div class="content">
									<p><strong>Address: </strong>{{ contact.address }}</p>
									<p><strong>Phone Number: </strong>{{ contact.telephoneNumber }}</p>
								</div>
							</div>
							<footer class="card-footer">
								<a class="card-footer-item" @click.prevent="trashContact(index)">Delete</a>
							</footer>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
    export default {
        name: 'contactsSearch',
        props: ['contacts'],
        data() {
            return {
                filter: ''
            }
        },
        computed: {
            filteredContacts() {
                return this.contacts.filter(p => p.firstName.toLowerCase().indexOf(this.filter.toLowerCase()) >= 0 ||
                    p.lastName.toLowerCase().indexOf(this.filter.toLowerCase()) >= 0 ||
                    p.address.toLowerCase().indexOf(this.filter.toLowerCase()) >= 0
                );
            }
        },
	    methods: {
            addOrRemoveContactToFavorites(contact) {
                contact.fave = !contact.fave;
                if (contact.fave) {
                    this.displayAlert('Contact added to Favorites.');
                } else {
                    this.displayAlert('Contact removed from Favorites.');
                }
                this.saveContactsToLocalStorage(this.contacts);
            },
		    trashContact(index) {
                let trashed = this.contacts.splice(index, 1);
                this.saveContactsToLocalStorage(this.contacts);
                this.deletedContacts.push(trashed[0]);
                this.saveTrashedToLocalStorage(this.deletedContacts);
                this.displayAlert('The contact has been moved to trash.');
            }
	    }
    }
</script>
