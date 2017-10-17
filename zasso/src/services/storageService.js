export default {
	cargarNoticia(noticia) {
		const noticias = this.traerNoticias();
		let id= noticias.length;
		noticia.id= id;
		noticias.push(noticia);
		localStorage.setItem('news', JSON.stringify(noticias));
	},
	traerNoticias() {
		const newsAux = localStorage.getItem('news') || '[]';
		return JSON.parse(newsAux);
	},
	noticiasPorCategoria(id){
		const cat = localStorage.getItem('news') || '[]';
		const arrayAux = JSON.parse(cat);
		const arrayAux2 = [];
		for (var i = 0; i < arrayAux.length; i++){
			if(arrayAux[i].category.id==id){
				arrayAux2.push(arrayAux[i]);
			}
		}
		return arrayAux2;

},
verNoticia(){
	const noticia = localStorage.getItem('news') || '[]';
	const arrayAux = JSON.parse(noticia);
	const arrayAux2 = [];
	for (var i = 0; i < arrayAux.length; i++){
		if(arrayAux[i].id==1){
			arrayAux2.push(arrayAux[i]);
		}
	}
	return arrayAux2;
}
}
