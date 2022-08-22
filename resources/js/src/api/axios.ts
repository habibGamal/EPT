import axios from "axios";


export const api = axios.create({
    baseURL: window.location.origin + '/api/',
    // timeout: 1000,
    // headers: { 'X-Custom-Header': 'foobar' }
});
