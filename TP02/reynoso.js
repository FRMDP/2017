
function estrellas_no_fork(jsonresponse){
		  let result = 0;
			for (let i of jsonresponse){
				
        if (i.fork==false) {
          result+= i.stargazers_count;        }
      }
      console.log("tenes "+result+" estrellas");
			return result;
		}
   