import axios from "axios";


export const api = axios.create({
    baseURL: window.location.origin + '/api/',
    withCredentials : true,
    headers: { 'Content-Type': 'application/json' }
});
export const web = axios.create({
    baseURL: window.location.origin,
    withCredentials : true,
    headers: { 'Content-Type': 'application/json' }
});
