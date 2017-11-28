<template>
	<div>
		<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
			<el-menu-item index="1"><router-link to="/">Mejores Proyectos</router-link></el-menu-item>
			<el-menu-item index="2"><router-link to="/users">Usuarios</router-link></el-menu-item>
			<el-menu-item index="3"><router-link to="/about">Acerca de</router-link></el-menu-item>
			<el-menu-item index="4"><router-link to="/comments">Comentarios</router-link></el-menu-item>
		</el-menu>
		<div class="line"></div>
	</div>
</template>

<script>
	export default {
		name: 'topMenu',
		data () {
			return {
				activeIndex: '1',
				activeIndex2: '1'
			}
		},
		methods: {
			handleSelect(key, keyPath) {
			}
		}
	}
</script>

<style scoped>

</style>
