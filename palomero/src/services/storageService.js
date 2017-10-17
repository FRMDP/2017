export default {
	agregarNoticia(noticia) {
		const noticias = this.traerNoticias();
		noticias.push(noticia);
		localStorage.setItem('news', JSON.stringify(noticias));
	},
	traerNoticias() {
		const noticias = localStorage.getItem('news') || '[]';
		return JSON.parse(noticias);
	},

	traerNoticiaById(id){
		const noticias=this.traerNoticias();
		return noticias.find(noticia=> noticia.id==id);
	},

	traerNoticiaByCategory(id){
		const noticias = this.traerNoticias();
		let filtro = [];
		noticias.forEach(function(n) {
			if(n.category.id == id){
				filtro.push(n);
			}
		});
		return filtro;
	}
}