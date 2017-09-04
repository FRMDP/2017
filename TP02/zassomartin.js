const multibusqueda = new Object(); //creacion de objeto
 multibusqueda.lista = []; //se agrega un array como propiedad

 mulibusqueda.agregar_funcion = function(funcion){
   multibusqueda.lista.push(funcion)
 }; // CORRECCION : se agrega una propiedad al objeto para gregar funciones a la lista

 multibusqueda.ejecutar = function(array){
  for (let x = 0; x < multibusqueda.lista.length;x++)
  console.log(multibusqueda.lista[x](array))
};  //CORRECCION : se volvio al metodo anterior, con los cambios en los cuales el metodo ejecutar ahora recibe un arreglo por parametro
    //y ese arreglo se pasa por parametro a las funciones que se llaman
