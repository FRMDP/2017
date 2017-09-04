function returnNumberOfIssuesByUser(jSon){
  const numberOfIssuesByUser = {};
  let checkIfUserExists;

  jSon.forEach(function(currentValue){

    checkIfUserExists = numberOfIssuesByUser.find(currentObject => currentObject.userName == currentValue.user.login);

    if(checkIfUserExists){
      numberOfIssuesByUser[numberOfIssuesByUser.indexOf(checkIfUserExists)].numberOfIssues++;
    }else {
      numberOfIssuesByUser.push({userName: currentValue.user.login, numberOfIssues: 1});
    }
  });
  return NumberOfIssuesByUser;
}
