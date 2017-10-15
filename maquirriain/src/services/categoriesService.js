const  categories = [
  {id: 1, name: "sports"},
  {id: 2, name: "local"},
  {id: 3, name: "world"},
  {id: 4, name: "economy"},
  {id: 5, name: "politics"},
  {id: 6, name: "entertainment"}
]

export default{

  allCategories(){
    let auxCategories = [];
    const categories = localStorage.getItem('categories') || '[]';
    auxCategories =  JSON.parse(categories);

    return  this.checkIfExistCategories(auxCategories);
  },
  checkIfExistCategories(auxCategories){
    if(!auxCategories.length){
        this.createCategories();
        return this.allCategories();
      }
      return auxCategories;
  },
  createCategories(){
    localStorage.setItem('categories',JSON.stringify(categories));
  }
}
