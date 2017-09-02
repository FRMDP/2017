function returnNumberOfIssuesByUser(jSon){
  const numberOfIssuesByUser = [];
  let userName;
  let issues;
  jSon.forEach(function(currentValue){
    userName = currentValue.user.login;
    issues = Number(currentValue.open_issues) + Number(currentValue.closed_issues);
    numberOfIssuesByUser.push({user: userName, numberOfIssues: issues});
  });
}
