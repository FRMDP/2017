function getRepositoriesByTopic(topic, repositories){

	let repoByTopic = [];

	repositories.forEach(function(r){
		const topics = r.topics;
		topics.forEach(function(t){
			if(t === topic){
				repoByTopic.push(r);
			}
		});
	});

	return repoByTopic;
}