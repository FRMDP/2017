<template>
	<div>
		<el-row>
			<el-col :lg="9" :md="9" :sm="9" :xs="24">
				<el-card v-for="(owner, i) in project.owners" :key="i">
					<img :src="owner.images[230]" class="img_owner">
					<div class="card-body">
						<h4 class="user-name">{{owner.display_name}}</h4>
						<div class="div"></div>
					</div>
				</el-card>

				<el-card>
					<div class="card-body" style="margin: 0;">
						<h3>{{project.name}}</h3>
						<ul class="ulFields">
							<li v-for="(field, i) in project.fields" :key="i"> {{field }} | </li>
						</ul>
						<ul class="ulStats">
							<li><i class="el-icon-star-on"></i>{{ project.stats.appreciations }}</li>
							<li><i class="el-icon-message"></i>{{ project.stats.comments }}</li>
							<li><i class="el-icon-view"></i>{{ project.stats.views }}</li>
						</ul>
					</div>
				</el-card>
				<el-card>
					<div class="card-body" style="margin: 0;">
						<h2>Tags</h2>
						<el-tag type="info" v-for="(tag, i) in project.tags" :key="i">{{tag}}</el-tag>
						<a href="#commentsTittle" style="margin-top: 20px; display: inline-block;"><h2>Comentarios</h2></a>
					</div>
				</el-card>
			</el-col>
			<el-col :lg="15" :md="15" :sm="15" :xs="24">
				<div class="cont-modules">
					<div v-for="(module, i) in project.modules" :key="i" class="cont-module">
						<img :src="module.src" class="project-module">
					</div>
				</div>
				<div class="comments">
					<h2 id="commentsTittle">Comentarios:</h2>
					<el-card class="box-card" v-for="(comment, i) in comments" :key="i">
						<el-row class="el-row-comment">
							<el-col :span="4" class="hidden-md-and-down">
								<img :src="comment.user.images[100]" class="img_owner" :alt="comment.user.display_name">
							</el-col>
							<el-col :span="20" class="comment-body">
								<h2 v-if="comment.user.display_name">{{comment.user.display_name}}</h2>
								<h2 v-else>(Sin nombre)</h2>
								<span>{{comment.comment}}</span>
							</el-col>
						</el-row>
						<div class="div"></div>
					</el-card>
					<el-button type="primary" class="btnVerMas" @click="loadComments">Ver más</el-button>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		name: 'mlProjectInfo',
		data() {
			return {
				id: '',
				project: '',
				comments: [],
				page: 1,
				loading: false
			}
		},
		methods: {
			getId() {
				this.id = this.$route.params.id;
			},
			getProject() {
				this.getId();
				this.$http.get('https://api.behance.net/v2/projects/'+this.id+'?client_id=x3bSO62jADrLCPFAFZafGl1pZBoJC6WZ')
				.then((response) => {
					this.project = response.data.project;
				})
				.catch(e => console.log(e))
			},
			loadComments() {
				this.getId();
				this.loading = true;
				this.$http.get('https://api.behance.net/v2/projects/'+this.id+'/comments?page='+this.page+'&client_id=x3bSO62jADrLCPFAFZafGl1pZBoJC6WZ')
				.then((response) => {
					this.comments = this.comments.concat(response.data.comments);
				})
				.catch(e => console.log(e))
				this.page = this.page + 1;
				this.loading = false;
			}
		},
		watch: {
			'$route.params.id': function() {
				this.id = this.$route.params.id;
				this.getProject();
				this.loadComments();
			}
		},
		created() {
			this.getProject();
			this.loadComments();
		}
	}
</script>

<style scoped>
.sheet {
	padding: 0px;
}

.img_owner {
	width: 100px; 
	height: 100px;
	border-radius: 50%;
	display: inline-block;
	margin-left: 20px;
}

.el-card {
	width: auto;
	margin: 0px;
	font-size: auto;
	min-height: auto;
	max-height: auto;
	display: block;
	box-shadow: none;
	border: none;
	/*border-bottom: 1px solid #ccc;*/
	margin-bottom: 10px;
}

.card-body {
	display: inline-block;
	vertical-align: top;
	position: relative;
	margin-top: 25px;
}

.ulStats { margin-top: 10px; }

.ulStats li {
	display: inline-block;
	margin-right: 10px;
}

.el-tag {
	margin: 2px;
}

.el-row-comment {
	margin: 0;
	padding: 7px;
}

.comment-body {
	padding: 15px 10px;
}

.project-module { width: 100%; }

h2 {
	margin-bottom: 10px;
	text-align: left;
}

.cont-module {
	margin-bottom: -10px;
}

.cont-modules {
	border-radius: 15px;
	margin-bottom: 20px;
	overflow: hidden;
}

.btnVerMas {
	float: right;
}

</style>