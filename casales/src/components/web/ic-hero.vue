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
							Search
						</a>
						<a class="nav-item" @click="changeView('add')">
							Add
						</a>
						<a class="nav-item" @click="changeView('favorites')">
							Favorites
						</a>
						<a class="nav-item" @click="changeView('trash')">
							Trash
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
