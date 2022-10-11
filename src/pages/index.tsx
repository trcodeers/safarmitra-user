import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import PlaceCard from "../components/placeCard";
import Colors from "../config/colors";
import { getPlaceList } from "../api/place";
import { useEffect, useState } from "react";
import { getPlaceTitleImage } from "../api/images";


const Home: NextPage = ({ data, error }: any) => {
 
  const router = useRouter()

  const [placeLists, setPlaceLists] = useState<any>([])

  useEffect(() => {
    setPlaceLists(data)
  }, [data])

  useEffect(() => {
    if(placeLists.length > 0){
      
    }
  }, [placeLists])

  const onViewExist = async(searchText: string) =>{
  
    if(!searchText) return
    const placeIndex = placeLists.findIndex((p: any) => p.searchText === searchText)
    
    if(placeLists[placeIndex].titleImage){
      return
    }

    console.log(searchText)
    const imageRes = await getPlaceTitleImage({ searchText })
    const newObj = {
      ...placeLists[placeIndex],
      titleImage: imageRes.data.result[0].titleImage
    }
    placeLists[placeIndex] = newObj

    setPlaceLists([...placeLists])
  }

  return (
    <>
      
      <Box
        sx={{
          width: '100vw',
          display: { xs: 'block', sm: 'block', md: 'block', lg: 'block' }
        }}
      >
        <img
          alt="A Pictue "
          height={'350px'}
          width={'100%'} 
          src={"/placeImages/title.jpg"}
        />
        <Typography 
         sx={{
          position: 'absolute',
          top: '20%',
          left: { xs: '15%', sm: '40%', lg: '43%', md: '43%' },
          backgroundColor: Colors.primary,
          color: Colors.white,
          height: '50px',
          width: '250px',
          textAlign: 'center',
          padding: '10px',
          fontWeight :'bold'
          

         }}
         variant="h5"
        >
           Winter is coming 
        </Typography>
      </Box>
    
      <Box>
        <Typography style={{ marginTop: '20px' }} variant="h6" textAlign={'center'}>
          Plan vacation for your favourite place 
        </Typography>
        {placeLists.length > 0 &&  <div 
          style={{
            marginTop: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: '40px'
          }}
        >
          {
            placeLists.map((place: any) =>{
              const { name, titleImage, searchText } = place
              return (
                  <PlaceCard 
                    key={name}
                    name={name}
                    image={titleImage}
                    searchText={searchText}
                    onViewExist={onViewExist}
                    onClick={() => router.push(`/${searchText}`)}
                  />
                )
            })
          }  
        </div>}
      </Box>
  
    </>
  );
};

export async function getStaticProps() {

  const { data } = await getPlaceList()

  const newData = data.result.map((el: any) => {
      const { _id, name, searchText } = el
      return { _id, name, searchText }
  })

  return {
    props: {
      data: newData,
      error:{ status: data.status !== 'Success' ? true : false}
    },
  }

}

export default Home;
