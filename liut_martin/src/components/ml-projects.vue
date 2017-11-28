<template>
	<div>
		<el-row>
			<el-col :span="24" class="hidden-md-and-down">
				<el-carousel :interval="4000" type="card" height="200px">
					<el-carousel-item>
						<img src="../assets/img/1.jpg" style="width: 100%">
					</el-carousel-item>
					<el-carousel-item>
						<img src="../assets/img/2.jpg" style="width: 100%">
					</el-carousel-item>
					<el-carousel-item>
						<img src="../assets/img/3.jpg" style="width: 100%">
					</el-carousel-item>
					<el-carousel-item>
						<img src="../assets/img/4.jpg" style="width: 100%">
					</el-carousel-item>
					<el-carousel-item>
						<img src="../assets/img/5.jpg" class="carousel-img">
					</el-carousel-item>
				</el-carousel>
			</el-col>
		</el-row>

		<div class="panel" @scroll="onScroll">
			<el-row>
				<el-col :xl="6" :lg="6" :md="6" :sm="12" :xs="24" v-for="(project, index) in projects" :key="index">
					<ml-project-card :project="project" :showOwners="showOwners"></ml-project-card>
				</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
	import mlProjectCard from '../components/ml-project-card.vue'

	export default {
		name: 'bestProjects',
		components: { mlProjectCard },
		data() {
			return {
				projects: [],
				page: 1,
				loading: false,
				showOwners: true
			}
		},
		methods: {
			handleClick() {

			},
			tabClick() {

			},
			onScroll(e) {
				const wrapper = e.target;
				const list = wrapper.firstElementChild;

				const scrollTop = wrapper.scrollTop;
				const wrapperHeight = wrapper.offsetHeight;
				const listHieght = list.offsetHeight;

				let diffHeight = listHieght - wrapperHeight;

				if(diffHeight <= scrollTop && !this.loading) {
					this.loadProjects();
				}
			},
			loadProjects() {
				this.loading = true;
				this.$http.get('https://api.behance.net/v2/projects?page='+this.page+'&client_id=x3bSO62jADrLCPFAFZafGl1pZBoJC6WZ')
				.then((response) => {
					this.projects = this.projects.concat(response.data.projects);
				})
				.catch(e => console.log(e))
				this.page = this.page + 1;
				this.loading = false;
			}
		},
		created() {
			this.loadProjects();
		}
	}
</script>

<style>
.el-carousel__item h3 {
	color: #475669;
	font-size: 14px;
	opacity: 0.75;
	line-height: 200px;
	margin: 0;
}

.el-carousel__item:nth-child(2n) {
	background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
	background-color: #d3dce6;
}
</style>