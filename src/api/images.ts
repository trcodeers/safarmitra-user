import httpService from "../services/httpServices";


const API_ENDPOINTS = {
   GetPlaceImages: '/api/v1/image'
}

export const getPlaceTitleImage = (data: any): Promise<any> => {
 return httpService.post(API_ENDPOINTS.GetPlaceImages, { ...data })
}    