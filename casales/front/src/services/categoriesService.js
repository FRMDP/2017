// Configurations
import config from "./../config/application";

// Resources
import resources from "./../resources/resources";

export default {
    getCategory(url){
        return resources.get(url);
    },
    getAllCategories(pUrl){
        const url = pUrl ? pUrl : config.API_CATEGORIES_ENDPOINT;
        return resources.get(url)
    }
}
