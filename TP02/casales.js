/*
 * Constructor function.
 *
 * @param Array reposApiResponse.
 */
function UserStats(reposApiResponse) {
    this.repos = reposApiResponse;
}

/*
 * Returns the number of repos.
 */
UserStats.prototype.getReposCount = function () {
    return this.repos.length
};

/*
 * Returns the sum of stars of all repos.
 */
UserStats.prototype.getStarsCount = function () {
    return this.repos.reduce((acc, curr) => acc + curr.stargazers_count, 0)
};


/*
 * Returns the average of stars of all repos.
 */
UserStats.prototype.getStarsAvg = function () {
    return (this.getStarsCount() / this.getReposCount()).toFixed(2)
};

/*
 * Returns the sum of watchers of all repos.
 */
UserStats.prototype.getWatchersCount = function () {
    return this.repos.reduce((acc, curr) => acc + curr.watchers_count, 0)
};

/*
 * Returns the sum of Forks of all repos.
 */
UserStats.prototype.getForksCount = function () {
    return this.repos.reduce((acc, curr) => acc + curr.forks, 0)
};
