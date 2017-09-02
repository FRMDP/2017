function returnSizeLanguageMoreUsed(jsonObjLanguages)
{
	let sizeResult=0;

	for(let language in jsonObjLanguages)
	{
		if(jsonObjLanguages[language]>sizeResult)
		{
		 sizeResult=jsonObjLanguages[language];
	    }
	}

   return sizeResult/1000;
}