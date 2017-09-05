function getRepositoriesByTopic(topic, repositories){
  let countReposByTopic = 0;

  repositories.forEach(function(r){
    r.topics.filter(function(t){
    	if(t.toLowerCase() == topic.toLowerCase() && r.fork == false){
    		countReposByTopic++;
    	}
    });
  });

  return countReposByTopic;
}