/* categories = [
    		{id: 1, name: "sports"},
    		{id: 2, name: "local"},
    		{id: 3, name: "world"},
    		{id: 4, name: "economy"},
    		{id: 5, name: "politics"},
    		{id: 6, name: "entertainment"}
];
Lo uso de referencia para saber las categorias */

export default {
    getCatById(id){
        const categories = this.getAllCat();
        return categories.find( c => c.id == id);
    },
    getAllCat(){
        const categories = localStorage.getItem('categories');
        return JSON.parse(categories);
    }
}