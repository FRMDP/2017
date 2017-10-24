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
		const noticias = this.traerNoticias();
		noticias.push(noticia);
		localStorage.setItem('news', JSON.stringify(noticias));
	},
	traerNoticias() {
		this.getJson();
		return this.noticias;
	},

	getJson(){
    axios.get('localhost:8080/news')
    .then((response) => {
        for(let n in response.data._embedded.news){
        this.news.title=n.title;
        this.news.body=n.body;
        this.news.date=n.date;
        this.news.id=n._links.self.href;
        this.news.category.id=n._links.category.href;
        this.news.reporter.id=n._links.reporter.href;
        this.noticias.push(this.news);
      }
    })
    .catch(e=>{
      console.log(e);
    })
  },

	traerNoticiaById(id){
		const noticias=traerNoticias();
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