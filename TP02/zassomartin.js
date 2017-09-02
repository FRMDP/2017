const multibusqueda = new Object(); //creacion de objeto
 multibusqueda.lista = []; //se agrega un array como propiedad
 multibusqueda.ejecutar = function(){
  for (let x = 0; x < multibusqueda.lista.length;x++)
  console.log(multibusqueda.lista[x]())
};  //se agrega un metodo al objeto para ejecutar las funciones y recorre el array del mismo


function agregar_funcion(funcion) //metodo para agregar funciones al array
{
  multibusqueda.lista.push(funcion)
}
