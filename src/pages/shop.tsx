
import { Box, Button, Card, CardActionArea, CardContent, Typography } from '@mui/material';
import type { NextPage } from 'next'
import ShopCard from '../components/shopCard';
import Colors from '../config/colors';

const Shop: NextPage = () => {
 
  return (
    <div style={{ marginTop: '30px', marginLeft: '40px'  }}>
      <ShopCard 
        title='Jacket'
        link='amazon.com'
        image='./nature.jpeg'
      />
    </div>
  )
}

export default Shop;  
