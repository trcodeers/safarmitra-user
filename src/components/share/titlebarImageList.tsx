import * as React from 'react';
import Image from 'next/image'
import { Box, Typography } from '@mui/material';
import Colors from '../../config/colors';

type Props = {
  data: Array<any>
}
export default function TitlebarImageList(props: Props) {
  const { data } = props
  
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
            {data.map((item: any) => (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0px',
                  position: 'relative'
                }}
                key={item.title}
              >
                <img
                  src={item.source}
                  alt={item.title}
                  style={{ 
                    width: '100%',
                    maxWidth: '400px'
                  }}
                  height={300}
                />
                <Typography 
                  sx={{ 
                    position: 'absolute', 
                    bottom: '1vh',
                    left: '2%', 
                    right: '1%',
                    color: Colors.primary,
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

