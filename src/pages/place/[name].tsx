import { NextPage } from "next/types";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import { getPlaceDetails } from "../../api/place";
import useFetch from "../../hooks/useFetch"


const Index: NextPage = () => {

    const router = useRouter()
    const { name } = router.query

    const { data: getPlaceDetailsData, error: getPlaceDetailsError, loading: getPlaceDetailsLoading, request: getPlaceDetailsRequset } = useFetch(getPlaceDetails)

    const [snackMessage, setSnackMessage] = useState('')
    const [data, setData] = useState('')

    useEffect(() =>{
        if(name){
            getPlaceDetailsRequset({name})
         }
      }, [name]) 

      useEffect(() =>{
        if(getPlaceDetailsError?.status){
            setSnackMessage(getPlaceDetailsError?.message || 'Please try after somtime')
        }
        else{
            if(getPlaceDetailsData?.result){
                setData(getPlaceDetailsData?.result)
            }
        }
      }, [getPlaceDetailsData, getPlaceDetailsError])


    return(
        <>
            {name}
        </>
    )

}

export default Index;
