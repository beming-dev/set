import axios from "axios";


export const LOCAL_TOKEN = 'JWT_TOKEN';

const authedRequest = axios.create();

authedRequest.interceptors.request.use(function (config) {
    config.headers.Authorization = `Bearer ${localStorage.getItem(LOCAL_TOKEN)}`;

    return config;
}, error => {
    return Promise.reject(error);
});


export {
    authedRequest
}