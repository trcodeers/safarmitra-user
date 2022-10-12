import httpService from "../services/httpServices";

const API_ENDPOINTS = {
    GetPlaceLists: '/api/v1/place',
    GetPlaceInformation: '/api/v1/place/placeInfo',
    createPlace: '/api/v1/place',
    AddPlaceInformation: '/api/v1/place/addInformation',
    AddPlaceImage: '/api/v1/place/addImage',
    AddPlaceProduct: '/api/v1/place/addProduct'
}

export const getPlaceList = (): Promise<any> => {
    return httpService.get(API_ENDPOINTS.GetPlaceLists)
}    

export const getPlaceInformation = (data: any): Promise<any> => {
    return httpService.post(API_ENDPOINTS.GetPlaceInformation, { ...data })
}    

export const createPlace = (data: any): Promise<any> => {
    return httpService.post(API_ENDPOINTS.createPlace, { ...data })
}    

export const addPlaceInformation = (data: any): Promise<any> => {
    return httpService.put(API_ENDPOINTS.AddPlaceInformation, { ...data })
}    

export const addPlaceImage = (data: any): Promise<any> => {
    return httpService.put(API_ENDPOINTS.AddPlaceImage, { ...data })
}    

export const addPlaceProduct = (data: any): Promise<any> => {
    return httpService.put(API_ENDPOINTS.AddPlaceProduct, { ...data })
}   
