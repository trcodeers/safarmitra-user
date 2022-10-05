import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Image from 'next/image'
import { Box, Typography } from '@mui/material';
import { relative } from 'path';
import Colors from '../../config/colors';

export default function TitlebarImageList() {
  
  return (
   <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0px',
          flexGrow:1,
          flexWrap: 'wrap'
        }}
      >
        {itemData.map((item: any) => (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0px',
              position: 'relative'
            }}
          >
            <Image
              src="/placeImages/title.jpg"
              alt="Picture of the author"
              width={400}
              height={300}
            />
            <Typography 
              sx={{ 
                position: 'absolute', 
                bottom: '1vh',
                left: '2%', 
                right: '1%',
                color: Colors.white,
                wordWrap: 'break-word'
              }} 
              variant='h6'
            >
              {item.title}
            </Typography>  
          </Box>
            
        ))}

      </Box>

   </>
   );
}

const itemData = [
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
