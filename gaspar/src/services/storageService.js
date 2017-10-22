export default {
	cargarNoticia(noticia) {
		const noticias = this.traerNoticias();
		let id= noticias.length;
		noticia.id= id;
		noticias.push(noticia);
		localStorage.setItem('noticias', JSON.stringify(noticias));
	},
	traerNoticias() {
		const news = localStorage.getItem('noticias') || '[]';
		return JSON.parse(news);
	},
	traerCategorias() {
		const cats = localStorage.getItem('categorias') || '[]';
		return JSON.parse(cats);
	},
	traerNoticia(id){
			const news = this.traerNoticias();
			return news.find(n => n.id == id);
		},
	traerCategoria(id)
		{
			const cats = this.traerCategorias();
			const cat = cats.find(c => c.id == id);
			return cat.id;

		},
		filtrarNoticias(id)
		{
			const news = this.traerNoticias();
			return news.filter(n => n.category.id == id);
		}
}
