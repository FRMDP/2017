function matchearGists(expresion, objeto){
	// URL
	var regex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/g;
	// Mail
	//var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	var resultado = "";

	if(expresion.match(regex) || expresion == "")
	{
		for (var i in objeto) {
			if (objeto.hasOwnProperty(i)) {
				resultado += "'" + i + "'" + ": " + objeto[i] + "," + "\n";
			}
		}
	}
	else{
		console.log("\n" + "Error, no es una URL");
	}
	return resultado;
}



// Prueba

const misGists = new Object();
misGists.url = "https://api.github.com/gists/aa5a315d61ae9438b18d",
misGists.forks_url =  "https://api.github.com/gists/aa5a315d61ae9438b18d/forks",
misGists.commits_url =  "https://api.github.com/gists/aa5a315d61ae9438b18d/commits",
misGists.id =  "aa5a315d61ae9438b18d",
misGists.description =  "description of gist",
misGists.public =  true,
misGists.owner = {"login": "octocat", "id": 1, "avatar_url": "https://github.com/images",};
      
const misGists2 = new Object();
misGists2.url = "asd",
misGists2.forks_url =  "asd",
misGists2.commits_url =  "asd",
misGists2.id =  "asd",
misGists2.description =  "asd",
misGists2.public =  true;
misGists2.owner = {"login": "octocat", "id": 1, "avatar_url": "https://github.com/images",};

const misGists3 = new Object();
misGists3.url = "asd",


console.log(matchearGists("https://api.github.com/gists/aa5a315d61ae9438b18d", misGists))
console.log(matchearGists("mail@gmail.com", misGists2))
console.log(matchearGists("https://api.github.com/gists/aa5a315d61ae9438b18d", misGists3))
