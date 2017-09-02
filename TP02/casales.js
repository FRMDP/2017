/*
 * Constructor function.
 *
 * @param Array reposApiResponse.
 */
function userStats(reposApiResponse) {
    const repos = reposApiResponse;

    /*
     * Returns the number of repos.
     */
    this.getReposCount = () => {
        return repos.length;
    };

    /*
     * Returns the sum of stars of all repos.
     */
    this.getStarsCount = () => {
        let stars = 0;
        repos.forEach((elem) => {
            stars += elem.stargazers_count;
        })
        return stars;
    };

    /*
     * Returns the average of stars of all repos.
     */
    this.getStarsAvg = () => {
        return this.getStarsCount() / this.getReposCount();
    };

    /*
     * Returns the sum of watchers of all repos.
     */
    this.getWatchersCount = () => {
        let watchers = 0;
        repos.forEach((elem) => {
            watchers += elem.watchers_count;
        })
        return watchers;
    };

    /*
     * Returns the sum of Forks of all repos.
     */
    this.getForksCount = () => {
        let forks = 0;
        repos.forEach((elem) => {
            forks += elem.forks;
        })
        return forks;
    };
}
