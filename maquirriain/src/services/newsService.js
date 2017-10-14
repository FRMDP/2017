export default{
  allNews(){
    const news = localStorage.getItem('news') || '[]';
    return JSON.parse(news);
  },

  categoryNews(name){
    const news = this.allNews();
    return news.filter((n) => name == n.category.name);
  },
  oneNews(id){
    const news = this.allNews();
    return news.filter((n) =>  id == n.id);
  },
  saveNews(newNews){
    const newsAux = this.allNews();
    newsAux.push(newNews);
    localStorage.setItem('news',JSON.stringify(newsAux));
  }
}
