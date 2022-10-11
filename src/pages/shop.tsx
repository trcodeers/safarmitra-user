import { Typography } from '@mui/material';
import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import { getProductLists } from '../api/product';
import ShopCard from '../components/shopCard';

const Shop: NextPage = ({ data, error}: any) => {

  const [productList, setProductList] = useState([])

  useEffect(() =>{
    setProductList(data)
  }, [data])

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
        <Typography variant='body2'>Do shopping for your next trip</Typography>
      </div>
      <div style={{ marginTop: '50px', justifyContent: 'center',  display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
       {
        productList.map((el: any)=>{
          const { title, image, source, affiliateLink, tags } = el
          return(
              <ShopCard 
                key={title}
                title={title}
                link={affiliateLink}
                image={image}
                productSource={source}
              />  
          )
        })
       }
      </div>
    </>
  )
}

export async function getStaticProps() {

  const { data } = await getProductLists()

  return {
    props: {
      data: data.result,
      error:{ status: data.status !== 'Success' ? true : false}
    },
  }

}

export default Shop;  
