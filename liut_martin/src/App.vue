<template>
	<div id="app">
		<el-header>
			<ml-menu></ml-menu>	
		</el-header>
		<el-main>
			<el-row :gutter="20">
				<h1 class="logo">PhotoBook</h1>
				<el-col :span="22" :offset="1" class="sheet">
					<transition name="fade">
						<router-view></router-view>
					</transition>
				</el-col>
			</el-row>

			<el-dialog title="Tips" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
				<span>This is a message</span>
				<span slot="footer" class="dialog-footer">
					<el-button @click="dialogVisible = false">Cancel</el-button>
					<el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
				</span>
			</el-dialog>
		</el-main>
		<ml-footer></ml-footer>		
	</div>
</template>

<script>
	import mlMenu     from './components/ml-menu.vue'
	import mlFooter   from './components/ml-footer.vue'
	import mlProjects from './components/ml-projects.vue'

	export default {
		name: 'app',
		components: {
			mlMenu,
			mlProjects,
			mlFooter
		},
		data() {
			return {
				activeName: '',
				dialogVisible: false
			}
		},
		methods: {
			handleClose() {}
		}
	}
</script>

<style>
	@import '../src/assets/css/styles.css';
	@import '../src/assets/css/barra.css';
	@import '../src/assets/css/vue-transition.css';
</style>
