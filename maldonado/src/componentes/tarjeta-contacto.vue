<template>
	<div class="tarjeta-contacto">
        <div class="card cardContent">
            <h4 class="card-title">{{ persona.nombre }}, {{ persona.apellido }}</h4>
                <p class="card-text">Edad: {{ persona.edad }}</p>
                <p class="card-text">Sexo: {{persona.sexo }}</p>
                <p class="card-text">Telefono: {{persona.telefono}}</p>
                <p class="card-text">Gustos: {{ persona.gustos }}</p>
                <div class="card-action">
                    <div class="cardActionContent">
                        <a class="wrapper btn-floating pulse btn-large waves-effect waves-dark green"
                            @click.prevent="agregarAfavoritos(index)">
                            <i class="material-icons">favorite</i>
                            <div class="tooltip">
                                Agregar a favoritos
                            </div>
                        </a>
                        <a class="editBtn btn-floating btn-large waves-effect waves-light blue "
                            @click.prevent="traerPersona(index)">
                            <i class="material-icons">edit</i>
                        </a>
                        <a class="deleteBtn btn-floating btn-large waves-effect waves-light red"
                            @click.prevent="eliminarPersona(index)">
                            <i class="material-icons">delete</i>
                        </a>
                    </div>
                </div>
        </div>
	</div>
</template>

<script>
	export default {
		name: 'tarjetaContacto',
		props: ['persona', 'index'],
		methods: {
			agregarAfavoritos(index){
                this.$emit('agregarAfavoritos', index);
            },
            traerPersona(index){
                this.$emit('traerPersona', index);
            },
            eliminarPersona(index) {
                this.$emit('eliminarPersona', index);
            }
		}
	}
</script>