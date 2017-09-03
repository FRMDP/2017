const multibusqueda = new Object(); //creacion de objeto
 multibusqueda.lista = []; //se agrega un array como propiedad
 multibusqueda.ejecutar = function(array){
  let i = (multibusqueda.lista.indexOf(array));
  let aux = multibusqueda.lista[i];
  for (let x = 0; x < aux.length;x++)
 console.log(aux[x]())
};  //Se realizo la correción sugerida, ahora el metodo ejecutar recibe por parametro el array que el usuario desea ejecutar con sus funciones almacenadas
   //se realiza la busqueda del elemento que deberia estar dentro de la propiedad array del objeto (se podria implementar elementos de validacion) a medida que recorre el array
   //se ejecutaran las funciones almacenadas


function agregar_array_con_funciones(array) //metodo para agregar array con "funciones" a la propiedad array del objeto
{
  multibusqueda.lista.push(array)
}
