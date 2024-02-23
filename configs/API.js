import axios from "axios";

const LOCAL_HOST = "http://192.168.1.8:3000/"
const PY_HOST = "https://loc.pythonanywhere.com"

export const endpoinds = {
    'login': '/o/token/',
    'register': '/register/',
    'current-user': '/users/current-user/'
}

//10.0.2.2    127.0.0.1
export const authApi = (accessToken) => axios.create({
    baseURL: LOCAL_HOST,
    headers: {
        "Authorization": `bearer ${accessToken}`
    }
})

export default axios.create({
    baseURL: LOCAL_HOST
})