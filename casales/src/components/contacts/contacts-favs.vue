<template>
	<section class="section">
		<div class="container">
			<div class="columns is-desktop">
				<div class="column is-8 is-offset-2">
					<div class="box has-text-centered">
						<h6 class="title is-6">List of favorite contacts</h6>
					</div>
					<div class="notification is-primary" v-if="!filteredFavorites.length">
						<strong>There are no favorite contacts.</strong>
					</div>
				</div>
			</div>
			<div v-if="filteredFavorites.length">
				<div class="columns is-desktop is-multiline is-centered">
					<div class="column is-4" v-for="contact in filteredFavorites">
						<div class="card">
							<header class="card-header">
								<p class="card-header-title">
									{{ contact.firstName }} {{ contact.lastName }}
								</p>
								<a @click="addOrRemoveContactToFavorites(contact)" class="card-header-icon" aria-label="more options">
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
								<a class="card-footer-item" @click.prevent="deleteContactFromFavorites(contact)">Delete</a>
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
        name: 'contactsFavs',
	    props: ['contacts'],
	    computed: {
            filteredFavorites() {
                return this.contacts.filter(p => p.fave === true);
            }
	    },
	    methods: {
            deleteContactFromFavorites(contact) {
                let index = null;
                for (let i = 0; i < this.contacts.length; i++) {
                    if (this.contacts[i] === contact) {
                        index = i;
                    }
                }
                if (index !== null) {
                    this.trashContact(index);
                }
            }
	    }
    }
</script>
