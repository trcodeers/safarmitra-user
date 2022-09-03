import { Card, CardActionArea, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import type { NextPage } from "next";
import Image from 'next/image'
import Places from "../constants/places";


const Home: NextPage = () => {
 


  return (
    <>
    <Box
      sx={{
        width: '100vw',
        height: { xs: '20px', lg: '350px' },
        display: { xs: 'block', sm: 'block', md: 'block', lg: 'block' }
      }}
    >
      <img
        alt="A Pictue "
        height={'350px'}
        width={'100%'} 
        src={"/nature.jpeg"}
      />
    </Box>
    
    <Box>
      <Typography style={{ marginTop: '20px' }} variant="h6" textAlign={'center'}>Know about the places</Typography>
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
            const { name, image } = place
          return (
              <Card
                sx={{
                  width: '300px',
                  height: '300px',
                }}
              >
                <CardActionArea
                   sx={{
                    // height: '350px',
                  }}
                >
                    <CardMedia
                      component="img"
                      height="140"
                      image={image}
                      alt={name}
                    />
                    <Typography style={{ marginTop: '10px', marginLeft: '5px' }} variant="h6">
                      {name}
                    </Typography>
                    <Box style={{ marginTop: '20px' }}>
                      <Typography style={{ padding: '4px', paddingBottom: '10px' }} variant="subtitle2" color="text.secondary">
                          Lizards are a widespread group of squamate reptiles, with over 6,000
                          species, ranging ,cross all continents except Antarctica
                      </Typography>
                    </Box>
                </CardActionArea>
              </Card>
            )
          } )
        }  
      </div>
    </Box>
    
    </>
  );
};

export default Home;
