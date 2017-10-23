// Configurations
import config from "./../config/application";

// Resources
import resources from "./../resources/resources";

// Services
import categories from "./categoriesService";
import reporters from "./reportersService";

export default {
    getArticle(url) {
        return resources.get(url);
    },
    // get all articles from the API
    // then map category and reporter to each element
    // and return all promises
    getAllArticles(pUrl) {
        const url = pUrl ? pUrl : config.NEWS_ENDPOINT;
        return resources.get(url)
            .then((response) => {
                let articles = response.data._embedded.news;

                if (articles.length > 0) {
                    const promises = articles.map((currentValue) => {
                        return categories.getCategory(currentValue._links.category.href)
                            .then((response) => {
                                currentValue.category = response.data;
                                return reporters.getReporter(currentValue._links.reporter.href);
                            })
                            .then((response) => {
                                currentValue.reporter = response.data;
                                return currentValue;
                            });
                    });
                    return Promise.all(promises);
                }

                return Promise.resolve(null);
            })
            .catch(() => {
                return Promise.reject('WORLD NEWS | Error loading articles.');
            });
    },
    saveArticle(article) {
        return resources.post(article);
    }
}
