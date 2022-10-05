import { NextPage } from "next/types";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import { getPlaceDetails } from "../api/place";
import useFetch from "../hooks/useFetch"
import { Box, Typography } from "@mui/material";

const data = [
    {
        question: 'A brief of Shimla',
        answer: 'Shimla ios   fb feruh fewh  fe w hwd uqwbi ewfwwh whf jwfiwbfwq dhw fiwfff fh fhjwhfw w fwfwfw fw fw fwe f f fffw w fw fwfwe fwe fw fw '
    },
    {
        question: 'How to reach Shimla',
        answer: 'Shimla ios   fb feruh fewh  fe w hwd uqwbi ewfwwh whf jwfiwbfwq dhw fiwfff fh fhjwhfw w fwfwfw fw fw fwe f f fffw w fw fwfwe fwe fw fw '
    },
    {
        question: 'Places to visit in shimla ',
        answer: 'Shimla ios   fb feruh fewh  fe w hwd uqwbi ewfwwh whf jwfiwbfwq dhw fiwfff fh fhjwhfw w fwfwfw fw fw fwe f f fffw w fw fwfwe fwe fw fw '
    },
    {
        question: 'Duration to spend in shimla',
        answer: 'Shimla ios   fb feruh fewh  fe w hwd uqwbi ewfwwh whf jwfiwbfwq dhw fiwfff fh fhjwhfw w fwfwfw fw fw fwe f f fffw w fw fwfwe fwe fw fw '
    },
    {
        question: 'Weather of Shimla',
        answer: 'Shimla ios   fb feruh fewh  fe w hwd uqwbi ewfwwh whf jwfiwbfwq dhw fiwfff fh fhjwhfw w fwfwfw fw fw fwe f f fffw w fw fwfwe fwe fw fw '
    },
 
]
const Index: NextPage = () => {

    const router = useRouter()
    const { name } = router.query

    const { data: getPlaceDetailsData, error: getPlaceDetailsError, loading: getPlaceDetailsLoading, request: getPlaceDetailsRequset } = useFetch(getPlaceDetails)

    const [snackMessage, setSnackMessage] = useState('')

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
                // setData(getPlaceDetailsData?.result)
            }
        }
      }, [getPlaceDetailsData, getPlaceDetailsError])


    return(
        <>
            <Box
                sx={{
                    display: 'flex', 
                    // justifyContent: 'center', 
                    flexDirection: 'column',
                    gap: '30px',
                    // alignItems: 'center',
                    padding: { xs: '2%', sm: '2%' }
                }}
            >
                {
                    data.map((el: any, index: number) => {
                        const { question, answer } = el
                        return(
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '10px'
                                }}
                            >
                                <Typography 
                                    variant="h6" 
                                    style={{ fontSize: '20px', fontWeight: '600' }}
                                >
                                   [ {question} ]
                                </Typography>   
                                <Typography variant="body1">
                                    <div  dangerouslySetInnerHTML={{ __html: answer }}/>
                                </Typography>   

                            </Box>
                        )
                    })
                }

            </Box>
        </>
    )

}

export default Index;
