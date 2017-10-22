/* categories = [
    		{id: 1, name: "sports"},
    		{id: 2, name: "local"},
    		{id: 3, name: "world"},
    		{id: 4, name: "economy"},
    		{id: 5, name: "politics"},
    		{id: 6, name: "entertainment"}
];
Lo uso de referencia para saber las categorias */
import Axios from 'axios'

export default {
    getCatById(id){
        const categories = this.getAllCat();
        return categories.find( c => c.id == id);
    },
    objectToArray(response){
        let categories = [];
        response.forEach( r => categories.push(r));
        return categories;
    },
    getAllCat(){
        let categories = [];
        return Axios.get('http://192.168.99.100:8080/categories') 
    }

}