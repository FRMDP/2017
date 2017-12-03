// Configurations
import config from "./../config/application";

// Resources
import resources from "./../resources/resources";

export default {
    getReporter(url){
        return resources.get(url);
    },
    getAllReporters(pUrl){
        const url = pUrl ? pUrl : config.API_REPORTERS_ENDPOINT;
        return resources.get(url)
    }
}
