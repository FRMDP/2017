<template>

    <div class="row">
        <div class="col-md-12">
            <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark" @click="cerrarAlert">
                <a class="navbar-brand" href="#" @click="cambiarVista('ingresar')">Mi Agenda</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="#" @click="cambiarVista('ingresar')">Ingresar</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#" @click="cambiarVista('buscar')">Buscar</a>
                        </li>

                        <li class="nav-item active">
                            <a class="nav-link" href="#" @click="cambiarVista('papelera')">Papelera de Reciclaje</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'vistaHeader',
        data() {
            return{
                borradoAlert: false,
                restauradoAlert: false,
                ingresadoAlert: false,
                editadoAlert: false
            }
        },
        methods: {
            cambiarVista(vista) {
                this.$emit('cambiarVista', vista);
                this.borradoAlert = false;
                this.restauradoAlert = false;
                this.ingresadoAlert = false;
                this.editadoAlert = false;
            },
            cerrarAlert() {
                this.borradoAlert = false;
                this.restauradoAlert = false;
                this.ingresadoAlert = false;
                this.editadoAlert = false;
            }
        }
    }
</script>
