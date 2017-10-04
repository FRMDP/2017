<template>
    <div name="inicio">
        <div class="row">
            <div class="jumbotron">
                <h2>Bienvenido a su Agenda Online!</h2>
                <p>Lea nuestra breve guia y comience a usar su agenda ya mismo.</p>
            </div>
        </div>
        <div class="row">
            <div class="media">
                <div class="media-body">
                    <h3 class="media-heading">Agregar Personas</h3>
                    <p>Usted puede agregar la cantidad de personas que desee a su agenda.
                        Para hacer esto, debe ir a la pestaña <strong><span class="glyphicon glyphicon-user"></span>
                            Agregar</strong> e ingrese los datos de su contacto como Nombre, Apellido, Edad, Telefono y Sexo.
                        Presione Guardar y listo!.</p>
                </div>
                <div class="media-right">
                    <img class="media-object" src="img/addperson.jpg" alt="addperson" >
                </div>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="media">
                <div class="media-left">
                    <img class="media-object" src="img/seeall.jpg" alt="seeall">
                </div>
                <div class="media-body">
                    <h3 class="media-heading">Vea sus Contactos</h3>
                    <p>Usted puede visualizar todos los contactos de su agenda ordenados alfabeticamente.
                        Para hacer esto, debe ir a la pestaña <strong><span class="glyphicon glyphicon-list"></span>
                            Ver todos</strong> y elija como quiere ordenarlos. Puede visualizarlos de dos
                        formas distintas: ordenados alfabeticamente por Nombre o por Apellido. Seleccione
                        la opcion que desee y voilá, sus contactos estaran ordenados como usted quiera.</p>
                </div>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="media">
                <div class="media-body">
                    <h3 class="media-heading">Filtre su busqueda</h3>
                    <p>Usted puede buscar a un contacto solo ingresando su nombre o parte de el.
                        Para hacer esto, debe ir a la pestaña <strong><span class="glyphicon glyphicon-search"></span>
                            Filtrar</strong> e ingrese el nombre. Mientras usted escribe, nuestros complejos
                        algoritmos realizan una busqueda en tiempo real de sus contactos con el mismo nombre o
                        que contengan parte de ese nombre, para facilitar su busqueda y hacerla mucho mas rápida y
                        eficiente.</p>
                </div>
                <div class="media-right">
                    <img class="media-object" src="img/filter.jpg" alt="seeall">
                </div>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="media">
                <div class="media-left">
                    <img class="media-object" src="img/delete.jpg" alt="delete">
                </div>
                <div class="media-body">
                    <h3 class="media-heading">Eliminar un Contacto</h3>
                    <p>Usted puede eliminar a un contacto con solo un click.
                        Para hacer esto, debe ir a la pestaña <strong><span class="glyphicon glyphicon-search"></span>
                            Filtrar</strong> o <strong><span class="glyphicon glyphicon-list"></span>
                            Ver todos</strong>. Busque el contacto que desea eliminar. Luego haga click sobre
                        <button class="btn btn-info"><span class="glyphicon glyphicon-remove"></span>
                        </button> el cual aparecerá a un lado de la informacion de su contacto y listo,
                        ese contacto ahora ya no existe mas.
                    </p>
                </div>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="media">
                <div class="media-body">
                    <h3 class="media-heading">Agregar contacto a favoritos</h3>
                    <p>Usted puede uan lista de favoritos.
                        Para hacer esto, debe ir a la pestaña <strong><span class="glyphicon glyphicon-search"></span>
                            Filtrar</strong> o <strong><span class="glyphicon glyphicon-list"></span>
                            Ver todos</strong>. Busque el contacto que desea poner en favoritos. Luego haga click sobre
                        <button class="btn btn-info"><span class="glyphicon glyphicon-star"></span>
                        </button> el cual aparecerá a un lado de la informacion de su contacto y listo,
                        ese contacto se encontrara en su lista de favoritos. Si quiere saber cuales son sus contactos
                        favoritos, vaya a la pestaña <strong><span class="glyphicon glyphicon-star"></span>Favoritos</strong>
                    </p>
                </div>
                <div class="media-right">
                    <img class="media-object" src="img/favorites.png" alt="favorites">
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default{
        name: "viewStart",
        data(){
            return{
            }
        },
    }
</script>

<style>
</style>