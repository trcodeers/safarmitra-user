import { Typography } from '@mui/material';
import type { NextPage } from 'next'
import ShopCard from '../components/shopCard';

const products = [
  {
    title:'Amazon Basics Outdoor Rucksack Backpack',
    link:"https://www.youtube.com/results?search_query=how+to+check+current+day+trfiic+on+search+console",
    image:'https://images-na.ssl-images-amazon.com/images/I/916QRsnimTL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
    productSource: "Decathlon"
  },
  {
    title:'Columbia Glennaker Rain Jacket Columbia Glennaker Rain Jacket Columbia Glennaker Rain Jacket',
    link:"https://www.youtube.com/results?search_query=how+to+check+current+day+trfiic+on+search+console",
    image:'https://m.media-amazon.com/images/I/51okOH2sQcL._AC_UX679_.jpg',
    productSource: "Myntra"
  },
  {
    title:'Amazon Basics Outdoor Rucksack Backpack',
    link:"https://www.youtube.com/results?search_query=how+to+check+current+day+trfiic+on+search+console",
    image:'https://images-na.ssl-images-amazon.com/images/I/916QRsnimTL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
    productSource: "Amazon"

  },
  {
    title:'Columbia Glennaker Rain Jacket Columbia Glennaker Rain Jacket Columbia Glennaker Rain Jacket',
    link:"https://www.youtube.com/results?search_query=how+to+check+current+day+trfiic+on+search+console",
    image:'https://m.media-amazon.com/images/I/51okOH2sQcL._AC_UX679_.jpg',
    productSource: "Amazon"

  }, {
    title:'Amazon Basics Outdoor Rucksack Backpack',
    link:"https://www.youtube.com/results?search_query=how+to+check+current+day+trfiic+on+search+console",
    image:'https://images-na.ssl-images-amazon.com/images/I/916QRsnimTL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
    productSource: "Amazon"

  },
  {
    title:'Columbia Glennaker Rain Jacket Columbia Glennaker Rain Jacket Columbia Glennaker Rain Jacket',
    link:"https://www.youtube.com/results?search_query=how+to+check+current+day+trfiic+on+search+console",
    image:'https://m.media-amazon.com/images/I/51okOH2sQcL._AC_UX679_.jpg',
    productSource: "Amazon"
  },
  {
    title:'Amazon Basics Outdoor Rucksack Backpack',
    link:"https://www.youtube.com/results?search_query=how+to+check+current+day+trfiic+on+search+console",
    image:'https://images-na.ssl-images-amazon.com/images/I/916QRsnimTL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
    productSource: "Amazon"
  },
  {
    title:'Columbia Glennaker Rain Jacket Columbia Glennaker Rain Jacket Columbia Glennaker Rain Jacket',
    link:"https://www.youtube.com/results?search_query=how+to+check+current+day+trfiic+on+search+console",
    image:'https://m.media-amazon.com/images/I/51okOH2sQcL._AC_UX679_.jpg',
    productSource: "Amazon"
  },
  {
    title:'Amazon Basics Outdoor Rucksack Backpack',
    link:"https://www.youtube.com/results?search_query=how+to+check+current+day+trfiic+on+search+console",
    image:'https://images-na.ssl-images-amazon.com/images/I/916QRsnimTL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
    productSource: "Amazon"
  },
  {
    title:'Columbia Glennaker Rain Jacket Columbia Glennaker Rain Jacket Columbia Glennaker Rain Jacket',
    link:"https://www.youtube.com/results?search_query=how+to+check+current+day+trfiic+on+search+console",
    image:'https://m.media-amazon.com/images/I/51okOH2sQcL._AC_UX679_.jpg',
    productSource: "Amazon"
  },
  {
    title:'Amazon Basics Outdoor Rucksack Backpack',
    link:"https://www.youtube.com/results?search_query=how+to+check+current+day+trfiic+on+search+console",
    image:'https://images-na.ssl-images-amazon.com/images/I/916QRsnimTL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
    productSource: "Amazon"
  },
  {
    title:'Columbia Glennaker Rain Jacket Columbia Glennaker Rain Jacket Columbia Glennaker Rain Jacket',
    link:"https://www.youtube.com/results?search_query=how+to+check+current+day+trfiic+on+search+console",
    image:'https://m.media-amazon.com/images/I/51okOH2sQcL._AC_UX679_.jpg',
    productSource: "Amazon"
  }
]
const Shop: NextPage = () => {
  
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
        <Typography variant='body2'>Do shopping for your next trip</Typography>
      </div>
      <div style={{ marginTop: '50px', justifyContent: 'center',  display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
       {
        products.map((el)=>(
          <ShopCard 
            key={el.title}
            title={el.title}
            link={el.link}
            image={el.image}
            productSource={el.productSource}
          />  
        ))
       }
      </div>
    </>
  )
}

export default Shop;  
