const usersObj = {
	//Array donde se guardan los usuarios.
	usersPersisted: [],
	addUser: function(userName){ 
    this.usersPersisted.push(userName);
	},
	//Metodo para devolver los usuarios que estan persistidos y que tambien estan en github
	checkExistingUsers: function(){
		const request = new XMLHttpRequest();
		request.open('get', 'https://api.github.com/users', true);
		request.send();
		//Llama a la funcion CompareNames cuando llegan los datos de la API
		request.onload = compareNames;
		//Arreglo donde se van a guardar los usuarios persistidos que existan en github
		const existingUsers = [];
		function compareNames() {
  		const responseObj = JSON.parse(this.responseText);
  		for(let i=0; i<usersObj.usersPersisted.length; i++){
  			const user = usersObj.usersPersisted[i];
  			for(let j=0; j<responseObj.length; j++){
  				if(user == responseObj[j].login){
  					existingUsers.push(user);
  				}
  			}
  		}		
		}
		return(existingUsers);
	}
};


usersObj.addUser("Juan");
usersObj.addUser("Maria");
//Dos usuarios que estan registrados en github
usersObj.addUser("mojombo");
usersObj.addUser("Caged");
const array = usersObj.checkExistingUsers();
console.log(array);