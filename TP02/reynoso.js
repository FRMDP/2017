
function CountNoForkRepoStars(userRepoList) {
          let arrStars = [];
          userRepoList.forEach(function (repo){
            if (repo.fork==false) {
              arrStars.push(repo.stargazers_count);
            }
          });
        let totalStars= arrStars.reduce((total,stars)=>total+stars);
        return totalStars;
}
