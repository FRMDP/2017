import axios from 'axios';

export default {

	data(){
		return{
			news: {
				id: 0,
				title: '',
				body: '',
				category: {
					id: 0,
					name: ''
				},
				reporter: {
					id: 0,
					name: ''
				},
				date: 0
			},
			noticias:[]
		}
	},


	agregarNoticia(noticia) {
		const promise=axios.post('http://localhost:8080/news',{
			"title":noticia.title,
			"body":noticia.body,
			"reporter":noticia.reporter,
			"category":noticia.category,
			"date":new Date().toJSON().slice(0,10)
		});
		return promise;
	},
	traerNoticias() {
		const promise=axios.get('http://localhost:8080/news');
		return promise;
	},

	traerNoticiaConLink(link){
		const promise = axios.get(link);
		return promesa;
		
	},

	traerNoticiaByCategory(link){
		const promise=axios.get(link);
		return promise;
	},

	traerCategoria(link){
		const promise=axios.get(link);
		return promise;
	},

	traerReportero(link){
		const promise=axios.get(link);
		return promise;
	}

}