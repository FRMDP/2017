<template>
	<div>
		<el-row>
			<el-col :lg="9" :md="9" :sm="9" :xs="24">
				<el-card class="el-info">
					<div class="card-body">
						<h1 class="userName">{{user.display_name}}</h1>
						<el-row>
							<el-col :span="8">
								<img v-if="user.images[276]" :src="user.images[276]" :alt="user.display_name" class="img_owner">
							</el-col>
							<el-col :span="16" style="padding: 10px;">
								<p>{{user.occupation}}</p>
								<p><i class="el-icon-location"></i> {{user.location}}</p>
								<a :href="user.website" style="text-decoration: underline;">{{user.website}}</a>
							</el-col>
						</el-row>
						<el-button type="primary" disabled round plain>Seguir</el-button>
						<el-button disabled round plain>Mensaje</el-button>
					</div>
				</el-card>
				<el-card class="el-info">
					<div class="card-body stats">
						<p><i class="el-icon-view"></i> Vistas de proyecto  <span>{{user.stats.views}}</span></p>
						<p><i class="el-icon-star-on"></i> Valoraciones <span>{{user.stats.appreciations}}</span></p>
						<p><i class="el-icon-d-arrow-right"></i> Siguiendo <span>{{ user.stats.following }}</span></p>
						<p><i class="el-icon-d-arrow-left"></i> Seguidores <span>{{ user.stats.followers }}</span></p>
					</div>
				</el-card>
				<el-card class="el-info">
					<div class="card-body">
						<h3>Foco</h3>
						<p v-for="field in user.fields">{{field}}</p>
					</div>
				</el-card>
				<el-card class="el-info">
					<div class="card-body">
						<h3>Acerca de {{user.name}}</h3>
						<p v-if="user.sections.About">{{user.sections.About}}</p>
						<p v-else>No hay información</p>
					</div>
				</el-card>
				<el-card class="el-info">
					<div class="card-body">
						<h3>Redes sociales</h3>
						<ul class="social_links">
							<li v-for="social in user.social_links"><a :href="social.url">{{social.service_name}}</a></li>
						</ul>
					</div>
				</el-card>
			</el-col>
			<el-col  :lg="15" :md="15" :sm="15" :xs="24">
				<el-row style="padding: 20px 0px 20px 20px">
					<el-tabs v-model="activeName" @tab-click="handleClick">
						<el-tab-pane label="Proyectos" name="first">
							<el-col :lg="8" :md="8" :xs="24" v-for="(project, index) in projects" :key="index">
								<ml-project-card :project="project" :owners="false"></ml-project-card>
							</el-col>
						</el-tab-pane>
						<el-tab-pane label="Valorados" name="second">
							<el-col :lg="8" :md="8" :xs="24" v-for="(appreciation, index) in appreciations" :key="index">
								<ml-project-card :project="appreciation.project" :owners="false"></ml-project-card>
							</el-col>
						</el-tab-pane>
					</el-tabs>
				</el-row>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	import mlProjectCard from '../components/ml-project-card.vue'

	export default {
		name: 'mlUser',
		components: {mlProjectCard},
		data() {
			return {
				id           : '',
				user         : '',
				projects     : [],
				activeName   : 'first',
				appreciations: []
			}
		},
		methods: {
			handleClick(tab, event) {

			},
			getUser() {
				this.getId();
				this.$http.get('https://api.behance.net/v2/users/'+this.id+'?client_id=x3bSO62jADrLCPFAFZafGl1pZBoJC6WZ')
				.then((response) => {
					this.user = response.data.user;
				})
				.catch(e => console.log(e))
			},
			getProjectsByUser() {
				this.$http.get('https://api.behance.net/v2/users/'+this.id+'/projects?client_id=x3bSO62jADrLCPFAFZafGl1pZBoJC6WZ')
				.then((response) => {
					this.projects = response.data.projects;
				})
				.catch(e => console.log(e))
			},
			getAppreciations() {
				this.$http.get('https://api.behance.net/v2/users/'+this.id+'/appreciations?client_id=x3bSO62jADrLCPFAFZafGl1pZBoJC6WZ')
				.then((response) => {
					console.log(response.data.appreciations);
					this.appreciations = response.data.appreciations;
				})
				.catch(e => console.log(e))
			},
			getId() {
				this.id = this.$route.params.id;
			}
		},
		watch: {
			'$route.params.id': function() {
				this.id = this.$route.params.id;
				this.getUser();
				this.getProjectsByUser();
				this.getAppreciations();
			}
		},
		created() {
			this.getUser();
			this.getProjectsByUser();
			this.getAppreciations();
		}
	}
</script>

<style scoped>
.img_owner {
	width: 100%;
}

.el-info {
	display: block;
	margin: 0;
	width: 100%;
	min-height: auto;
	max-height: auto;
	border-radius: 0px;
	background-color: rgba(1, 1, 1, .06);
	box-shadow: none;
	border: none;
	border-bottom: 1px solid #ccc;
}

.el-card .card-body { margin: 0; }

.el-card .el-col {
	background-color: inherit !important;
}

h1.userName, h4, h3 {
	margin-bottom: 10px;
}

.el-card .el-card__body p {
	text-align: left;
	margin-bottom: 10px;
}

.stats p {
	display: block;
	font-size: 1.2em;
}

.stats p span { 
	float: right;
	font-weight: bold;
}
</style>