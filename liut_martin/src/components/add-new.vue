<template>
	<div>
		<md-card>
			<form @submit.prevent="addNew">
				<md-card-header>
					<h1>Add NEW</h1>
				</md-card-header>
				<md-card-content>
					<md-input-container>
						<label>Title</label>
						<md-input v-model="New.title" maxlength="100" required></md-input>
					</md-input-container>

					<md-input-container>
						<label>Body</label>
						<md-textarea v-model="New.body" maxlength="500" required></md-textarea>
					</md-input-container>
					
					<md-input-container>
						<label for="reporter">Reporter</label>
						<md-select name="reporter" id="reporter" v-model="New.reporter" required>
							<md-option v-for="r in reporters" :value="r.name" :key="r.id">{{r.name}}</md-option>
						</md-select>
					</md-input-container>

					<md-input-container>
						<label for="category">Category</label>
						<md-select name="category" id="category" v-model="New.category" required>
							<md-option v-for="c in categories" :value="c.id" :key="c.id">{{c.name}}</md-option>
						</md-select>
					</md-input-container>
				</md-card-content>
				<md-card-actions>
					<md-button class="md-raised md-primary" type="submit">Save</md-button>
				</md-card-actions>
				<md-snackbar :md-position="message.vertical + ' ' + message.horizontal" ref="snackbar" :md-duration="message.duration">
					<span>New sabed</span>
					<md-button class="md-accent" md-theme="light-blue" @click="$refs.snackbar.close()">OK</md-button>
				</md-snackbar>
			</form>
		</md-card>
	</div>
</template>

<script>
	import newService from './../services/newsService'
	import reporterService from './../services/reporterService'
	import categoryService from './../services/categoryService'

	export default {
		name: 'addNew',
		data() {
			return {
				date: new Date(),
				New: {
					id      : '', //int
					title   : '', //str
					body    : '', //str
					category: '', //Category
					reporter: '', //Reporter
					date    : ''  //int
		    	},
		    	reporters: [],
		    	categories: [],
		    	message: {
					vertical  : 'bottom',
					horizontal: 'right',
					duration  : 4000
		    	}
			}
		},
		methods: {
			addNew() {
				this.New.date = this.date;
				newService.save(this.New);
				this.showMessage();
				this.cleanNew();
			},
			showMessage() {
		      this.$refs.snackbar.open();
		    },
		    cleanNew() {
				this.New.id       = '';
				this.New.title    = '';
				this.New.body     = '';
				this.New.category = '';
				this.New.reporter = '';
				this.New.date     = '';
		    }
		},
		created() {
			this.reporters  = reporterService.getAll();
			this.categories = categoryService.getAll();
		}
	}
</script>

<style>
	div {
		width: 100%;
	}

	h1 {
		text-align: center;
	}

	.md-card {
		padding: 20px;
		border-radius: 7px;
	}
</style>