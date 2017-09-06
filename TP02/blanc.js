function listIssues (jsonResponse) {

  return jsonResponse.map(function (x) {
    return {
      "title" : x.title,
      "state" : x.state,
      "user" : x.user.login,
      "closed" : x.closed_at
    };
  });

}
