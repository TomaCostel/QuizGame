import http from "./httpService";
import {apiUrl} from "../config.json";

const apiEndpoiint = apiUrl + "/users";

export function register(user){
    http.post(apiEndpoiint,{
        email:user.username,
        password:user.password,
        name:user.name,
    })
}