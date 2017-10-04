<template>
	<section class="hero is-primary">
		<div class="hero-head">
			<header class="nav">
				<div class="container">
					<div class="nav-left">
						<a class="nav-item">
							<span class="icon is-large is-left"><i class="fa fa-address-book"></i></span>
						</a>
						<a class="nav-item" @click="changeView('search')">
							<strong>Search</strong>
						</a>
						<a class="nav-item" @click="changeView('add')">
							<strong>Add</strong>
						</a>
						<a class="nav-item" @click="changeView('favorites')">
							<strong>Favorites</strong>
						</a>
						<a class="nav-item" @click="changeView('trash')">
							<strong>Trash</strong>
						</a>
					</div>
				</div>
			</header>
		</div>

		<div class="hero-body">
			<div class="container has-text-centered">
				<h1 class="title">
					Address Book
				</h1>
			</div>
		</div>
	</section>
</template>

<script>
    export default {
        name: 'icHero',
        methods: {
            changeView(view) {
                this.$emit('changeView', view);
            }
        }
    }
</script>
