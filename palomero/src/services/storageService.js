export default {
	agregarNoticia(noticia) {
		const noticias = this.traerNoticias();
		noticias.push(noticia);
		localStorage.setItem('news', JSON.stringify(noticias));
	},
	traerNoticias() {
		const noticias = localStorage.getItem('news') || '[]';
		return JSON.parse(noticias);
	}

	traerNoticiaById(id){
		const noticias = localStorage.getItem('news') || '[]';
		return JSON.parse(noticias).parse(noticia=> noticia.id=id);
	}

	getUltimoId(){
		cost noticas=this.traerNoticias()
		let rta=1;
		if(noticias.lenght>0){
			rta=noticias[lenght-1].id+1;
		}
		return rta;
	}
}