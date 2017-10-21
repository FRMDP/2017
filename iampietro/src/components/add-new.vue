<template>
	<div class="row">
		<form class="col s12 l6 offset-l3">
			<div class="row">
				<h1 class="center">Write a news</h1>
				<div class="input-field col s12 m8 l8">
					<div class="row">
						<label class="black-text forLabel">Title</label>
					</div>
					<div class="row">
						<i class="material-icons prefix">mode_edit</i>
						<input v-model="particularNew.title" placeholder="Example:Trump did not say anything stupid today" type="text" class="validate" maxlength="54" required>
					</div>
				</div>
				<div class="input-field col s12 m12">
					<div class="row">
						<label class="black-text">Body</label>
					</div>
					<div class="row">
						<textarea style="height: 150px;" v-model="particularNew.body" class="materialize-textarea validate" placeholder="Enter the body of the new"
						rows="20" required>
						</textarea>	
					</div>
				</div>

				<select id="category" v-model="particularNew.category.name">
			        <option v-for="category in cat" v-bind:value="category.name">
			            {{category.name}}
			        </option>
			    </select>

				<div class="input-field col s12 m8">
					<div class="row">
						<label class="black-text forLabel">Who are you?</label>
					</div>
					<div class="row">
						<i class="material-icons prefix">account_circle</i>
						<select id="reporters" v-model="particularNew.reporter.name">
					        <option v-for="reporter in rep" v-bind:value="reporter.name">
					            {{reporter.name}}
					        </option>
					    </select>
						<div id="error" class="forAlert">
							<i class="material-icons prefix forErrorIcon">cancel</i> 
							<strong><span class="forErrorSpans">We're sorry, you are not registered</span></strong>
						</div>
						<div id="ok" class="forAlert">
							<i class="material-icons prefix forOkIcon">check_circle</i>
							<strong><span class="forOkSpans">News created successfully</span></strong> 
						</div>
					</div>
				</div>
				 <div class="input-field col l7">
                    <button :disabled="!formOk" class="btn waves-effect waves-light right" type="submit"
                                name="action" @click.prevent="createNew">Send
                    </button>
                </div>
            </div>
		</form>
	</div>
</template>

<script>

	export default {
		data() {
			return {
		    	particularNew: {
		    		id: '',
		    		title: '',
		    		body: '',
		    		category: {
		    			name: ''
		    		},
		    		reporter: {
		    			name: ''
		    		},
		    		date: '',
		    		confirmReporter:'',
		    	},
		    	cat: [],
		    	rep: []
			}
		},
		watch: {

		},
		computed: {
	        formOk() {
	            return this.particularNew.title && this.particularNew.body && this.particularNew.category.name && this.particularNew.reporter.name;
	        }
    	},
    	methods: {
    		/*createNew() {
    			this.particularNew.id = newsService.getCorrectId();
    			this.particularNew.category.id = newsService.getCategoryId(this.particularNew.category.name);
    			this.confirmReporter = newsService.getReporterId(this.particularNew.reporter.name);
    			if(this.confirmReporter == -1){
    				const span = document.getElementById("error");
    				span.style.display = "block";
    			} else {
    				this.particularNew.reporter.id = this.confirmReporter.id;
	    			this.particularNew.date = new Date().toJSON().slice(0,10);
	    			newsService.addNew(this.particularNew);
	    			this.cleanInputs();
	    			let ok = document.getElementById("ok");
	    			ok.style.display = "block";
	    			setTimeout(function(){
	    				ok.style.display = "none";
	    			}, 5000);
    			}*/
    		createNew() {
    			this.$http.post('https://utn-newspaper-api.herokuapp.com/news',{
    				"title": this.particularNew.title,
    				"body": this.particularNew.body,
    				"date": new Date().toJSON().slice(0,10),
    				"reporter": this.rep.find(r => r.name == this.particularNew.reporter.name)._links.self.href,
    				"category": this.cat.find(c => c.name == this.particularNew.category.name)._links.self.href,
    			})
    			.then(response => {
    				console.log(response)
    			})
    			.catch(error => {
    				console.log(error);
    			})
    			this.cleanInputs();
    		},
    		cleanInputs() {
    			this.particularNew.title = '';
    			this.particularNew.body = '';
    			this.particularNew.category.name = '';
    			this.particularNew.reporter.name = '';
    			const span = document.getElementById("error");
    			span.style.display = "none";
    		}
    	},
    	mounted() {
    		this.$http.get('https://utn-newspaper-api.herokuapp.com/categories')
    			.then(response => {
    				this.cat = response.data._embedded.categories;
    			})
    			.catch(error => {
    				console.log(error);
    			})

    		this.$http.get('https://utn-newspaper-api.herokuapp.com/reporters')	
    			.then(response => {
    				this.rep = response.data._embedded.reporters;
    			})
    			.catch(error => {
    				console.log(error);
    			})    			
    		const select = document.getElementById("category");
    		select.style.display = "block";

    		const reporter = document.getElementById("reporters");
    		reporter.style.display = "block";

    	}
	}
</script>