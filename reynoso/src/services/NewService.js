export default {
    getNews(){
        if ( JSON.parse(localStorage.getItem('news')) != null){
            return JSON.parse(localStorage.getItem('news'));
        }else return [];
    },
    getNew(id){
      return getNews().find(New => New.id == id);
    },
    saveNew(New){
        let news = this.getNews();
        console.log(New);
        news.push(New);
        localStorage.setItem('news', JSON.stringify(news));
    },
    getNewByCategoryId(id){
        return this.getNews().filter(New => New.category.id == id);
    },
    getNewByCategoryName(name){
        return this.getNews().filter(New => New.category.name == name);
    },
    getNewByReporterId(id){
      return this.getNews().filter(New => New.reporter.id == id);
    },

}