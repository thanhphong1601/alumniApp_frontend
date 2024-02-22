import axios from "axios";

export const endpoinds = {
    'login': '/o/token/',
    'register': '/register/',
    'current-user': '/users/current-user/'
}

//10.0.2.2    127.0.0.1
export const authApi = (accessToken) => axios.create({
    baseURL: "https://loc.pythonanywhere.com",
    headers: {
        "Authorization": `bearer ${accessToken}`
    }
})

export default axios.create({
    baseURL: "https://loc.pythonanywhere.com" 
})