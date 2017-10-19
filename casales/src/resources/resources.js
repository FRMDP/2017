import axios from "axios/dist/axios.min";

// Configurations
import config from "./../config/application";

export default {
    get(url, page, size) {
        return axios({
            // `url` is the server URL that will be used for the request
            url: url,
            // `method` is the request method to be used when making the request
            method: 'get',
            // `baseURL` will be prepended to `url` unless `url` is absolute.
            // It can be convenient to set `baseURL` for an instance of axios to pass relative URLs
            // to methods of that instance.
            baseURL: config.BASE_URL,
            headers: {'Content-Type': 'application/hal+json'},
            // `params` are the URL parameters to be sent with the request
            // Must be a plain object or a URLSearchParams object
            params: {
                sort: 'date,desc',
                page: page,
                size: size
            },
            // `timeout` specifies the number of milliseconds before the request times out.
            // If the request takes longer than `timeout`, the request will be aborted.
            timeout: config.TIMEOUT
        });
    },
    post(data){
        const url = '/news';
        return axios({
            // `url` is the server URL that will be used for the request
            url: url,
            // `method` is the request method to be used when making the request
            method: 'post',
            // `baseURL` will be prepended to `url` unless `url` is absolute.
            // It can be convenient to set `baseURL` for an instance of axios to pass relative URLs
            // to methods of that instance.
            baseURL: config.BASE_URL,
            headers: {'Content-Type': 'application/json'},
            // `data` is the data to be sent as the request body
            // Only applicable for request methods 'PUT', 'POST', and 'PATCH'
            // When no `transformRequest` is set, must be of one of the following types:
            // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
            // - Browser only: FormData, File, Blob
            // - Node only: Stream, Buffer
            data: data,
            // `timeout` specifies the number of milliseconds before the request times out.
            // If the request takes longer than `timeout`, the request will be aborted.
            timeout: config.TIMEOUT
        });
    }
}
