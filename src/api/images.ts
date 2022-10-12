import httpService from "../services/httpServices";


const API_ENDPOINTS = {
   GetPlaceTitleImages: '/api/v1/image',
   GetPlaceImages: '/api/v1/image/placeImages'
}

export const getPlaceTitleImage = (data: any): Promise<any> => {
 return httpService.post(API_ENDPOINTS.GetPlaceTitleImages, { ...data })
}    

export const getPlaceImages = (data: any): Promise<any> => {
   return httpService.post(API_ENDPOINTS.GetPlaceImages, { ...data })
}   