
import { Box, Button, Card, CardActionArea, CardContent, Typography } from '@mui/material';
import type { NextPage } from 'next'

const Shop: NextPage = () => {
 
  return (
    <div style={{ marginTop: '30px', marginLeft: '40px'  }}>
      <Card sx={{
        width: '250px',
        height: '380px'
      }}>
        <CardContent>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '20px'
            }}
          >
            <img 
              src="./nature.jpeg" 
              alt="image"
              width={'230px'} 
              height='200px'
            />

          <Box textAlign={'center'}>
            Winter long lasting  Jacket --1202
          </Box>
          </Box>
          <div style={{  }}>
            <Button size='large' variant='outlined'>Buy</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Shop;  
