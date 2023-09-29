import axios from "axios"

const loginApi=(email,password)=>{
    return axios.post("https://reqres.in/api/login",{email,password});
}
export {loginApi}