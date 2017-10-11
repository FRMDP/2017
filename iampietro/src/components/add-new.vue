<template>
	<div class="row">
		<form class="col s12 l6 offset-l3">
				<h1 class="center">Write a news</h1>
				<div class="input-field col s12 m8">
					<i class="material-icons prefix">mode_edit</i>
					<input v-model="particularNew.title" placeholder="for example:Trump did not say anything stupid today" type="text" class="validate" required>
				</div>
				<div class="input-field col s12 m12">
					<textarea v-model="particularNew.body" class="materialize-textarea validate" placeholder="Enter the body of the new"
					rows="20" required>
					</textarea>	
				</div>
				<div class="row">
					<div class="col m4">
						<div class="row">
							<input name="category" class="with-gap" value="sports" v-model="particularNew.category.name" type="radio" id="1" />
							<label for="1">Sports</label>
						</div>
						<div class="row">
							<input name="category" class="with-gap" value="local" v-model="particularNew.category.name" type="radio" id="2" />
							<label for="2">Local</label>
						</div>
					</div>
					<div class="col m4">
						<div class="row">
							<input name="category" class="with-gap" value="economy" v-model="particularNew.category.name" type="radio" id="4" />
							<label for="4">Economy</label>
						</div>
						<div class="row">
							<input name="category" class="with-gap" value="world" v-model="particularNew.category.name" type="radio" id="3" />
							<label for="3">World</label>
						</div>
					</div>
					<div class="col m4">
						<div class="row">
							<input name="category" class="with-gap" value="politics" v-model="particularNew.category.name" type="radio" id="5" />
							<label for="5">Politics</label>
						</div>
						<div class="row">
							<input name="category" class="with-gap" value="entertainment" v-model="particularNew.category.name" type="radio"id="6" />
							<label for="6">Entertainment</label>
						</div>
					</div>
				</div>
				<div class="input-field col s12 m8">
					<i class="material-icons prefix">account_circle</i>
					<input v-model="particularNew.reporter.name" placeholder="John Arch" id="author" type="text" class="validate" required>
				</div>
				 <div class="input-field col l7">
                    <button :disabled="!formOk" class="btn waves-effect waves-light right" type="submit"
                                name="action" @click.prevent="createNew">Send
                    </button>
                </div>
		</form>
	</div>
</template>

<script>
	import newsService from '../services/newsService';

	export default {
		data() {
			return {
		    	particularNew: {
		    		id: '',
		    		title: '',
		    		body: '',
		    		category: {
		    			id: 0,
		    			name: ''
		    		},
		    		reporter: {
		    			id: 0,
		    			name: ''
		    		},
		    		date: ''
		    	}
			}
		},
		computed: {
	        formOk() {
	            return this.particularNew.title && this.particularNew.body && this.particularNew.category.name && this.particularNew.reporter.name;
	        }
    	},
    	methods: {
    		createNew() {
    			this.particularNew.id = newsService.getCorrectId();
    			this.particularNew.category.id = newsService.getCategoryId(this.particularNew.category.name);
    			this.particularNew.reporter.id = newsService.getReporterId(this.particularNew.reporter.name);
    			this.particularNew.date = new Date().toJSON().slice(0,10);
    			newsService.addNew(this.particularNew);
    			this.cleanInputs();
    		},
    		cleanInputs() {
    			this.particularNew.title = '';
    			this.particularNew.body = '';
    			this.particularNew.category.name = '';
    			this.particularNew.reporter.name = '';
    		}
    	}
	}
</script>