<template>
	<el-card>
		<img :src="project.covers[404]" class="img_cover">
		<div class="card-body">
			<router-link :to="'/projects/'+project.id"><h4>{{project.name}}</h4></router-link>
			<el-dropdown v-if="showOwners">
				<span class="el-dropdown-link">
					Propietarios<i class="el-icon-arrow-down el-icon--right"></i>
				</span>
				<el-dropdown-menu slot="dropdown" class="dropdown">
					<el-dropdown-item v-for="(owner, index) in project.owners" :key="index">
						<img class="img_perfil" :src="owner.images[50]" :alt="owner.city"> 
						<router-link :to="'/user/' + owner.id">
							<p class="display_name">{{owner.display_name}}</p>
						</router-link>
					</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
			<div class="div"></div>
			<div class="panel-footer">
				<p><i class="el-icon-view"></i> {{project.stats.views}}</p>
				<p><i class="el-icon-message"></i> {{project.stats.comments}}</p>
				<p><i class="el-icon-star-on"></i> {{project.stats.appreciations}}</p>
			</div>
		</div>
	</el-card>
</template>

<script>
	export default {
		name: 'mlProjectCard',
		props: {
			project: Object,
			showOwners: Boolean
		}
	}
</script>

<style scoped>
	a > h4 {
		height: 40px;
	}
</style>