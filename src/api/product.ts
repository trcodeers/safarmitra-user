import httpService from "../services/httpServices";

const API_ENDPOINTS = {
    Product: '/api/v1/product',
}

export const createProduct = (data: any): Promise<any> => {
    return httpService.post(API_ENDPOINTS.Product, { ...data })
}  

export const getProductLists = (): Promise<any> => {
    return httpService.get(API_ENDPOINTS.Product)
}    

export const updateProduct = (data: any): Promise<any> => {
    return httpService.put(API_ENDPOINTS.Product, { ...data })
}    
  