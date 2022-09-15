import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import Footer from "../components/footer";
import PlaceCard from "../components/placeCard";
import Places from "../constants/places";


const Home: NextPage = () => {
 
  const router = useRouter()

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
      </Box>
    
      <Box>
        <Typography style={{ marginTop: '20px' }} variant="h6" textAlign={'center'}>
          Plan vacation for your favourite place 
        </Typography>
        <div 
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
            Places.map((place, index) =>{
              const { name, image, description, searchText } = place
              return (
                  <PlaceCard 
                    key={name}
                    name={name}
                    image={image}
                    description={description}
                    onClick={() => router.push(`/${searchText}`)}
                  />
                )
            })
          }  
        </div>
      </Box>
  
    </>
  );
};

export default Home;
