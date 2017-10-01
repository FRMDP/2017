function FollowersInCommon(fUser1, fUser2)
{
	let comun=[];
	
	fUser1.forEach(function(user){
		if (fUser2.find(user))
		{
			comun.push(user.login);
		}
	});
	
	return comun;
}


