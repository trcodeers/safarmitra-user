import { Box } from "@mui/system";
import type { NextPage } from "next";
import Image from 'next/image'


const Home: NextPage = () => {
 


  return (
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

  );
};

export default Home;
