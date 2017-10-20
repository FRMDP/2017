<template>
	<footer class="page-footer #ef6c00 orange darken-3">
        <div class="container">
            <div class="row">
                <div class="col l6 s12">
                	<h5 class="white-text">Maldoff</h5>
                	<p class="grey-text text-lighten-4">
                		Un noticiero online diferente.
                	</p>
              	</div>
              	<div class="col l2 offset-l1 s12">
                	<h5 class="white-text">Categorias</h5>
                	<ul>
                  		<li>
                  			<router-link to="/category/1" class="link">
                  				Locales
							</router-link>
                  		</li>
                  		<li>
                  			<router-link to="/category/2" class="link">
                  				Deportes
							</router-link>
                  		</li>
                  		<li>
                  			<router-link to="/category/3" class="link">
                  				Mundo
							</router-link>
                  		</li>
                	</ul>
                </div>
                <div class="col l2 offset-l1 s12">
                	<ul class="secondLine">
                  		<li>
                  			<router-link to="/category/4" class="link">
                  				Economia
							</router-link>
                  		</li>
                  		<li>
                  			<router-link to="/category/5" class="link">
                  				Politica
							</router-link>
                  		</li>
                  		<li>
                  			<router-link to="/category/6" class="link">
                  				Entretenimiento
							</router-link>
                  		</li>
                	</ul>
              	</div>
            </div>
        </div>
        <div class="footer-copyright">
            <div class="container">
            	Todos los Derechos Reservados
            	<a class="right link" href="#!">Contacto</a>
            </div>
        </div>
    </footer>
</template>

<script>
	export default {
		name: 'fmFooter'
	}
</script>

<style>
	.secondLine {
		padding-top: 35px;
	}
	.link {
		color: white;
	}
</style>