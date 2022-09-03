import { Typography } from '@mui/material';
import type { NextPage } from 'next'
import ShopCard from '../components/shopCard';

const Shop: NextPage = () => {
 const d = [
    {
      title:'Amazon Basics Outdoor Rucksack Backpack',
      link:"https://www.youtube.com/results?search_query=how+to+check+current+day+trfiic+on+search+console",
      image:'https://images-na.ssl-images-amazon.com/images/I/916QRsnimTL.__AC_SX300_SY300_QL70_FMwebp_.jpg'
    },
    {
      title:'Columbia Glennaker Rain Jacket',
      link:"https://www.youtube.com/results?search_query=how+to+check+current+day+trfiic+on+search+console",
      image:'https://m.media-amazon.com/images/I/51okOH2sQcL._AC_UX679_.jpg'
    }
 ]
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
        <Typography variant='h5'>Do shopping for your next trip</Typography>
      </div>
      <div style={{ marginTop: '30px', marginLeft: '40px', display: 'flex', flexDirection: 'row', gap: '30px'  }}>
       {
        d.map((el)=>(
          <ShopCard 
            title={el.title}
            link={el.link}
            image={el.image}
          />  
        ))
       }
      </div>
    </>
  )
}

export default Shop;  
