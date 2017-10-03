<template>
		<div class="card">
			<div class="card-content">
				<h3>About this proyect</h3>

				<ul><h4>Lineamientos</h4>
					<li><h5>Tienen que hacer el PR contra la rama TP3, no contra master.</h5></li>
					<li><h5>Resuelven la historia de usuario asignada en Taiga. Deben no solo subir los cambios sino tambien manejar los estados y tiempos en el tablero. Esto es importante porque solo voy a revisar las cosas que estén con estado **READY FOR TEST**.</h5></li>
					<li><h5>Crean una carpeta con su apellido en minuscula. Dentro de esta carpeta agregan un archivo _index.html_, estilos (css) y scripts (js) necesarios.</h5></li>
					<li><h5>Tienen tiempo hasta las 18Hs del dia martes 19/9.</h5></li></ul>



					<ul><h4>Qué hay que hacer? Una agenda.</h4>
						<li><h5>Debe utilizar un framework CSS a elección.</h5></li>
						<li><h5>Deben tener una hoja de estilos propia con al menos 4 reglas que afecten su aplicación.</h5></li>
						<li><h5>Deben crear por lo menos tres vistas diferentes (agregar, buscar, ....).</h5></li>
						<li><h5>Deben utilizar cuatro componentes del framework (cards, navbars, alerts, etc).</h5></li>
						<li><h5>Las personas ingresadas tienen que tener por lo menos cuatro datos diferentes (nombre, teléfono, sexo, etc) y debe validar el tipo de dato de la información ingresada.</h5></li>
						<li><h5>Debe persistir la información utilizando alguna API del navegador.</h5></li>
						<li><h5>En la vista de búsqueda se debe poder ingresar un string y que ese string este presente en cualquiera de los campos de la persona.</h5></li>
						<li><h5>Se deben poder borrar las personas.</h5></li></ul>

						<ul><h4>Qué se evalúa?</h4>
							<li><h5>Prolijidad del código: indentaciones, espacios innecesarios, utilización de convenciones, etc.</h5></li>
							<li><h5>Nombres de variables y funciones significativas.</h5></li>
							<li><h5>Utilización de las herramientas (Git, Github, Taiga).</h5></li>
							<li><h5>ES6, Array#extras, String, Object, Math, Array, etc.</h5></li>
							<li><h5>Markup HTML innecesario (no crear elementos de más ni elementos que no correspondan a lo que quieren representar).</h5></li></ul>
						</div>
					</div>
			</template>

			<script>
				export default{
					name:'about',
					props:['vista'],

					data(){
						mensaje:false
					},

					methods:{

					}
				}
			</script>
<style>
	
</style>