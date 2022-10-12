import axios from "axios";
import { setup } from 'axios-cache-adapter'
const baseURL = 'https://safarmitra-api.herokuapp.com'
const api = setup({
    baseURL: baseURL,
  
    cache: {
      maxAge: 18 * 60 * 60 * 1000 // 18 hours
    }
})

const apiClientGet = (url: string, cachable = true) =>{
    
    if(!cachable){  
        return api.get(url, { cache: { maxAge : 0 } })
    }
    
    return api.get(url)

}

const apiClientPost = (url: string, body: any) =>{
    return axios.post(`${baseURL}${url}`, body)
}

const httpService = {
    get : apiClientGet,
    post : apiClientPost,
    put : axios.put,
    delete : axios.delete,
}

 
export default httpService;