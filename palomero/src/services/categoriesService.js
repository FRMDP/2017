
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
    const promise=axios.get('http://localhost:8080/categories');
    return promise;
  },

  getCategoryById(uid){
    const categories =this.getCategories();
    return JSON.parse(categories).find(category => category.uid==uid);
  }

}