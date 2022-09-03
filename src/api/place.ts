import httpService from "../services/httpServices";

const End_Points = {
    GetPlaceDetails: '/api/v1/place',
}

export const getPlaceDetails = (data: { name: string}): Promise<any> => {
    const { name } = data
    return httpService.get(`${End_Points.GetPlaceDetails}/${name}`)
}    