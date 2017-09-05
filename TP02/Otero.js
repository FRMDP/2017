function superior(arregloAPI){
	return function busqueda(funcionPreDefinida){
		funcionPreDefinida(arregloAPI);
	}
}