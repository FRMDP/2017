<template>
	<div>
		<el-row>
			<el-col :span="24">
				<el-form :inline="true" class="demo-form-inline">
					<el-form-item label="Buscar Usuarios">
						<el-input class="input-search" v-model="name" placeholder="Buscar por nombre o ID de usuario"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="searchUsers" class="hidden-md-and-down"><i class="el-icon-search"></i></el-button>
					</el-form-item>
				</el-form>
			</el-col>
		</el-row>


		<div class="panel" @scroll="onScroll">
			<el-row>
				<el-col :xl="6" :lg="6" :md="6" :sm="12" :xs="24" v-for="user in users" :key="user.name">
					<el-card>
						<img :src="user.images[230]" class="img_cover">
						<div class="card-body">
							<router-link :to="'/user/'+user.id"><h4 class="user-name">{{user.display_name}}</h4></router-link>
							<div class="div"></div>
							<p><i class="el-icon-location"></i> {{user.country}}</p>
						</div>
					</el-card>
				</el-col>
				<i v-if="loading" class="el-icon-loading"></i>
			</el-row>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'mlUsers',
		data() {
			return {
				name: '',
				users: [],
				loading: false,
				page: 1
			}
		},
		methods: {
			searchUsers() {
				this.loading = true;
				this.$http.get('https://api.behance.net/v2/users/?q='+this.name+'&client_id=x3bSO62jADrLCPFAFZafGl1pZBoJC6WZ')
				.then((response) => {
					this.users = response.data.users;
				})
				.catch(e => console.log(e))
				this.loading = false;
			},
			onScroll(e) {
				const wrapper = e.target;
				const list = wrapper.firstElementChild;

				const scrollTop = wrapper.scrollTop;
				const wrapperHeight = wrapper.offsetHeight;
				const listHieght = list.offsetHeight;

				let diffHeight = listHieght - wrapperHeight;

				if(diffHeight <= scrollTop && !this.loading) {
					this.loadUsers();
				}
			},
			loadUsers() {
				this.loading = true;
				this.$http.get('https://api.behance.net/v2/users?page='+this.page+'&client_id=x3bSO62jADrLCPFAFZafGl1pZBoJC6WZ')
				.then((response) => {
					this.users = this.users.concat(response.data.users);
				})
				.catch(e => console.log(e))
				this.page = this.page + 1;
				this.loading = false;
			},
		},
		created() {
			this.loadUsers();
		}
	}
</script>

<style scoped> 
	.input-search {
		width: 500px;
		color: #fff;
	}

	.demo-form-inline {
		text-align: center;
		margin-top: 20px;
	}

	.user-name {
		text-align: center !important;
		display: block !important;
	}

	.el-card .el-card__body p {
		display: block;
	}

	.demo-form-inline {
		overflow: hidden;
	}
</style>