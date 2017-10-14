export default{

  allCategories(){
    const categories = localStorage.getItem('categories') || '[]';
    return JSON.parse(categories);
  }
}
