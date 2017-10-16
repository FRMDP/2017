<template>
	<section class="section">
		<div class="container">
			<div class="columns is-desktop">
				<div class="column is-8 is-offset-2">
					<div class="box has-text-centered">
						<h6 class="title is-6">List of deleted contacts</h6>
					</div>
					<div class="notification is-primary" v-if="!deletedContacts.length">
						<strong>There are no deleted contacts.</strong>
					</div>
				</div>
			</div>
			<div v-if="deletedContacts.length">
				<div class="columns is-desktop is-multiline is-centered">
					<div class="column is-4" v-for="(contact, index) in deletedContacts">
						<div class="card">
							<header class="card-header">
								<p class="card-header-title">
									{{ contact.firstName }} {{ contact.lastName }}
								</p>
								<span v-if="contact.fave" class="card-header-icon" aria-label="more options">
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                </span>
							</header>
							<div class="card-content">
								<div class="content">
									<p><strong>Address: </strong>{{ contact.address }}</p>
									<p><strong>Phone Number: </strong>{{ contact.telephoneNumber }}</p>
								</div>
							</div>
							<footer class="card-footer">
								<a class="card-footer-item" @click.prevent="restoreFromTrashed(index)">Restore</a>
								<a class="card-footer-item" @click.prevent="deleteContactForever(index)">
									Delete Forever
								</a>
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
        name: 'contactsTrash',
        props: ['deletedContacts'],
        methods: {
            deleteContactForever(index) {
                this.$emit('deleteContactForever', index);
            },
            restoreFromTrashed(index) {
                this.$emit('restoreFromTrashed', index);
            }
        }
    }
</script>
