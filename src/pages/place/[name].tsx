import { GetStaticPaths, NextPage } from "next/types";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import { getPlaceInformation, getPlaceList } from "../../api/place";
import useFetch from "../../hooks/useFetch"
import { Box } from "@mui/material";
import TitlebarImageList from "../../components/share/titlebarImageList";
import ProductViewsList from "../../components/place/productViewsList";
import PlaceInfomationList from "../../components/place/placeInfomationList";
import { getPlaceImages } from "../../api/images";

const Index: NextPage = ({ data, error }: any) => {
  
  const router = useRouter()
  const { name } = router.query
  
  const { data: placeImagesData, error: getPlaceImagesError, loading: getPlaceImagesLoading, request: getPlaceImagesRequset } = useFetch(getPlaceImages)

    const [snackMessage, setSnackMessage] = useState('')

    const [productList, setProductList] = useState([])
    const [informationList, setInformationList] = useState([])
    const [imageList, setImageList] = useState<Array<any>>([])

    useEffect(() =>{
        if(data){
          setInformationList(data.information)
          setProductList(data.products)
        }
    },[data])

    useEffect(() =>{
      if(name)
        getPlaceImagesRequset({ searchText: name })
    }, [name]) 

    useEffect(() =>{
      setImageList(placeImagesData.result)
    }, [placeImagesData])

    

    return(
        <>
       
            <Box
              sx={{
                marginLeft: '1%',
                marginTop: '20px'
              }}
            >
                {productList?.length > 0 && 
                  <ProductViewsList 
                    data={productList}
                  />
                }
            </Box>

            <PlaceInfomationList 
              informationList={informationList}
            />

            <div>
              {imageList?.length > 0 && 
                <TitlebarImageList
                    data={imageList}
                />
              }
            </div>

        </>
    )

}


export const getStaticPaths: GetStaticPaths<any> = async () => {
    
  const { data } = await getPlaceList()
  
  const path = data.result.map((el: any) =>( { params: { name:  el.searchText }} ))

  return {
      paths: path,
      fallback: false
  }

}

export async function getStaticProps({ params }: any) {

    const { data } = await getPlaceInformation({ searchText: params.name })
    
    return {
      props: {
        data: {
            information: data?.result?.information || null,
            products: data?.result?.products || null
        },
        error:{ status: data.status !== 'Success' ? true : false}
      },
    }

}

export default Index;
