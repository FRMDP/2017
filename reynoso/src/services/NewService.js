export default {
    getNews(){
        if ( JSON.parse(localStorage.getItem('news')) != null){
            return JSON.parse(localStorage.getItem('news'));
        }else return [];
    },
    getNew(id){
      return this.getNews().find(New => New.id == id);
    },
    saveNew(New){
        let news = this.getNews();
        news.push(New);
        localStorage.setItem('news', JSON.stringify(news));
    },
    getNewByCategoryId(id){
        return this.getNews().filter((New) => New.category.id === id >=0);
    },
    getNewByCategoryName(name){
        const n= this.getNews();
        return n.filter(New => New.category.name === name);
    },
    getNewByReporterId(id){
      return this.getNews().filter((New) => New.reporter.id == id >=0);
    },

}