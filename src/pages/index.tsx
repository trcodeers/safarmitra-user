import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import type { NextPage } from "next";
import Places from "../constants/places";


const Home: NextPage = () => {
 

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
          src={"/nature.jpeg"}
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
              const { name, image, description } = place
              return (
                <Card key={name} sx={{ width: 300 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={image}
                      alt={name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        {name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
                )
            })
          }  
        </div>
      </Box>
    
    </>
  );
};

export default Home;
