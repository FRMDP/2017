export default {
	agregarNoticia(noticia) {
		const noticias = this.traerNoticias();
		noticias.push(noticia);
		localStorage.setItem('news', JSON.stringify(noticias));
	},
	traerNumeros() {
		const noticias = localStorage.getItem('news') || '[]';
		return JSON.parse(noticias);
	}
}