import type { NextPage } from 'next'
import ShopCard from '../components/shopCard';

const Shop: NextPage = () => {
 
  return (
    <>
      <div style={{ marginTop: '30px', marginLeft: '40px'  }}>
        <ShopCard 
          title='Jacket'
          link={"https://www.youtube.com/results?search_query=how+to+check+current+day+trfiic+on+search+console"}
          image='./placeImages/nature.jpeg'
        />
      </div>
    </>
  )
}

export default Shop;  
