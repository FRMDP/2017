const categories = [
    {id: 1, name: "sports"},
    {id: 2, name: "local"},
    {id: 3, name: "world"},
    {id: 4, name: "economy"},
    {id: 5, name: "politics"},
    {id: 6, name: "entertainment"}
];

export default{
    setCategories(){
        localStorage.setItem('categories', JSON.stringify(categories));
    },
    getCategories(){
        return JSON.parse(localStorage.getItem('categories'));
    },
    getCategory(id){
        return getCategories().find(category => category.id == id);
    },
    mounted(){
        this.setCategories();
    }
}