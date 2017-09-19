function returnNumberOfIssuesByUser(issueList){
  const numberOfIssuesByUser = {};

  issueList.forEach(function(issue){

    if (numberOfIssuesByUser[issue.user.login] === undefined){
        numberOfIssuesByUser.issue.user.login = 1;
    }else{
      numberOfIssuesByUser.issue.user.login++;
    }
  });
  return NumberOfIssuesByUser;
}


