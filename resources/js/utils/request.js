import axios from "axios";
import store from "../store";

const url = window.location.origin + "/api/";

const service = axios.create({
    baseURL: url,
    timeout: 1200000
});

service.interceptors.request.use(
    config => {
        config.headers["Authorization"] = `Bearer ${store.state.token}`;
        config.headers["Access-Control-Allow-Origin"] = "*";
        config.headers["Access-Control-Allow-Credentials"] = "true";
        return config;
    },
    error => {
        Promise.reject(error);
    }
);
service.interceptors.response.use(undefined, function(err) {
    return new Promise(function(resolve, reject) {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
            store.dispatch("logout");
        }
        throw err;
    });
});

export default service;
