
import axios from 'axios';

export default{

  data(){
    return{
      categories:[],
      category: {
        id: '',
        name: ''
      }
    }
  },

  getCategories(){
    this.getJson();
    return this.categories;
  },

  getJson(){
    axios.get('localhost:8080/categories')
    .then((response) => {
        for(let c in response.data._embedded.categories){
        this.category.name=c.name;
        this.category.id=c._links.self.href;
        this.categories.push(this.category);
      }
    })
    .catch(e=>{
      console.log(e);
    })
  },

  addCategories(){
  	localStorage.setItem('categories',JSON.stringify(categories));
  },

  getCategoryById(id){
    const categories = getCategories();
    return JSON.parse(categories).find(category => category.id==id);
  }

}