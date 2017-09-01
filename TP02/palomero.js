function returnSizeLanguageMoreUsed(jsonObjLanguages)
{
	let sizeResult=0;
	let languageNameResult="";

	for(let key in jsonObjLanguages)
	{
		if(key>sizeResult)
		{
		sizeResult=key;
		languageNameResult=jsonObjLanguages[key];
	    }
	}

   console.log("El lenguaje "+ languageNameResult + " pesa " + sizeResult);
   return sizeResult;
}