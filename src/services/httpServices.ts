import axios from "axios";
import { setup } from 'axios-cache-adapter'
const baseURL = 'https://travell.onrender.com'

const api = setup({
    baseURL: baseURL,
  
    cache: {

      maxAge: 18 * 60 * 60 * 1000, // 18 hours
      exclude: {
        // Only exclude PUT, PATCH and DELETE methods from cache
        methods: ['put', 'patch', 'delete']
      }
    
    }

})

const apiClientGet = (url: string, cachable = true) =>{
    
    if(!cachable){  
        return api.get(url, { cache: { maxAge : 0 } })
    }
    
    return api.get(url)

}

const apiClientPost = (url: string, body: any) =>{
    return api.post(`${baseURL}${url}`, body)
}

const httpService = {
    get : apiClientGet,
    post : apiClientPost,
    put : axios.put,
    delete : axios.delete,
}

 
export default httpService;