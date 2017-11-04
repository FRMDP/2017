<template>
	<div class="section">
		<div class="container">
			<h1 class="header black-text">{{ oneNews.title }}</h1>
			<div class="row">
				<div class="col 12 m12 l12">
					<img src="https://picsum.photos/950/350/?random">
				</div>
			</div>
			<p class="black-text"><strong>{{ oneNews.date }}</strong></p>
			<p class="right-align black-text">By: <strong>{{ reporter.name }}</strong></p>
			<div class="divider"></div>
			<div class="row center">
				<p class="light black-text forP">
					{{ oneNews.body }}
				</p>
			</div>
			<div class="row">
				<p class="black-text">More News like this: 
					<router-link to="/category" @click="setCategory(category)">
						<strong>{{ category.name }}</strong>
					</router-link>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'viewOneNew',
		props: ['oneNews'],
		data(){
			return{
				reporter: {},
				category: {}
			}
		},
		methods:{
            setCategory(category){
                this.$emit('setCategory', category);
            }
        },
		created(){
            this.$http.get(this.oneNews._links.reporter.href)
                .then(response => {
                    this.reporter = response.data;
                    })
                .catch(error => {
                    console.log(error); 
                });
            this.$http.get(this.oneNews._links.category.href)
                .then(response => {
                    this.category = response.data;
                    })
                .catch(error => {
                    console.log(error); 
                });
		}
	}
</script>