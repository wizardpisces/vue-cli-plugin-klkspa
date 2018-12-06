import axios, { AxiosRequestConfig } from "axios";
import { getLangFromCookie } from "./utils";
/**
 * 初始化axios 默认headers
 */
const defaultHeaders = {
    "x-platform": "desktop",
    "x-powered": "klkspa"
};

const service = axios.create({
    headers: defaultHeaders
});

const handleResponse = (response: any) => {
    return response.data;
};

const handleError = (error: any) => {
    return Promise.reject({
        success: false,
        error: error || {
            message: "There were some network issue. Please try again later."
        }
    });
};

function ajaxBase(options: AxiosRequestConfig) {
    options.headers = {
        ...options.headers,
        "Accept-Language": getLangFromCookie().replace("-", "_")
    };

    return service(options)
        .then(handleResponse)
        .catch(handleError);
}

const request = {
    get(url: string, data?: object, options = {}) {
        return ajaxBase(
            Object.assign(options, {
                url,
                method: "GET",
                params: data
            })
        );
    },
    post(url: string, data: object, options = {}) {
        return ajaxBase(
            Object.assign(options, {
                url,
                data,
                method: "POST"
            })
        );
    },
    postForm(url: string, data: object, options = {}) {
        return ajaxBase(
            Object.assign(options, {
                url,
                data,
                method: "POST",
                headers: {
                    "content-type": "application/x-www-form-urlencoded"
                }
            })
        );
    }
};

export default request;
