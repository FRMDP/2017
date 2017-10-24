let categories = [];


export default {
    getCategory(id) {
        return categories.find(c => c[0].uid == id);
    },
    getAllCategories() {
        axios.get('http://localhost:8090/categories')
            .then(response => categories.push(response.data._embedded.categories))
            .catch(error => console.log('there was the following error loading news: ' + error ));

        return categories;
    },
    updateCategories(){
        axios.get('http://localhost:8090/categories')
            .then(response => categories.push(response.data._embedded.categories))
            .catch(error => console.log('there was the following error loading news: ' + error ));
    }

}