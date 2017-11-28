<template>
	<div>
		<el-card class="box-card">
			<div slot="header" class="clearfix">
				<h2>Acerca de mi</h2>
			</div>
			<div class="card-body">
				<el-row>
					<el-col :span="5" :offset="1" class="hidden-xs-only">
						<img src="../assets/img/me.png" class="img-me">
					</el-col>
					<el-col :span="15" :xs="24" :offset="1">
						<h3>Martin Liut</h3>
						<p>Soy alumno agresado de la UTN como TSP (Técnico Superior en Programación) a fines del 2014</p>
						<p>
							A mediados de 2015 comenzé a trabajar en una empresa orientada a la fidelización de clientes alrededor de Argentina,
							integrando un equipo para desarrollo a aplicaciones WEB. Ahí comencé a notar qué es lo que más me gustaba: el Front-end
						</p>
						<p>En el año 2016 comenzé a cursar TSSI (Técnico Superior en Sistemas Informáticos). </p>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas consequatur ipsum placeat quas labore deleniti dolorem distinctio, ratione omnis delectus facilis harum! Possimus assumenda nam accusamus aut quos consequuntur ratione.</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas consequatur ipsum placeat quas labore deleniti dolorem distinctio, ratione omnis delectus facilis harum! Possimus assumenda nam accusamus aut quos consequuntur ratione.</p>
					</el-col>
				</el-row>
			</div>
		</el-card>
	</div>
</template>

<script>
	export default {
		name: 'mlAbout'
	}
</script>

<style scoped>
	.img-me {
		width: 100%;
		border-radius: 10px;
		padding: 2px;
		border: 1px solid #ccc;
		box-shadow: 4px 4px 10px 0px lightgrey;
	}

	h3 {
		text-align: left;
	}

	p {
		text-align: left !important;
		text-indent: 20px;
		margin-bottom: 10px;
	}

	.el-card { 
		max-height: inherit;
		display: block;
		margin: auto;
	 }
</style>