
function CountNoForkRepoStars(userRepoList) {
        let totalStars = 0;
        userRepoList.forEach(repo=>{if (repo.fork==false) totalStars+=(repo.stargazers_count);});
        return totalStars;
}
