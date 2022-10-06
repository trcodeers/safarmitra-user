import { GetStaticPaths, NextPage } from "next/types";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import { getPlaceDetails } from "../api/place";
import useFetch from "../hooks/useFetch"
import { Box, Typography } from "@mui/material";
import TitlebarImageList from "../components/share/titlebarImageList";

const content = [
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
    {
        question: 'Budget idea',
        answer: 'Shimla ios   fb feruh fewh  fe w hwd uqwbi ewfwwh whf jwfiwbfwq dhw fiwfff fh fhjwhfw w fwfwfw fw fw fwe f f fffw w fw fwfwe fwe fw fw '
    },
 
]

const images = [
    {
      img: '/placeImages/title.jpg',
      title: 'ShimlaShimlaShimlaShimlaShimlaShimlaShimlaShimlaShimlaShimlaShimlaShimlaShimla',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Shimla',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Mussorie',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Manali',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Varanasi',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
    },
];

 
const Index: NextPage = ({ data, error }: any) => {

    const { content, images } = data
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
                    flexDirection: 'column',
                    gap: '30px',
                    padding: { xs: '2%', sm: '2%' }
                }}
            >
                {
                    content.map((el: any, index: number) => {
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

            <div>
                <TitlebarImageList
                    data={images}
                />
            </div>

            </Box>
        </>
    )

}


export const getStaticPaths: any = async () => {
    
    return{
        paths: [{ params: { name:  'mussiore' }}],
        fallback: false
    }

}

export async function getStaticProps() {

    // const {data} = await getIndianStatesList()

    return {
      props: {
        data: {
            content: content,
            images: images,
            // products: Array<any>
        },
        // error:{ status: data.status !== 'Success' ? true : false}
        error: false
      },
    }

}

export default Index;
