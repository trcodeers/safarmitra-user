import { Card, CardContent, Box, Button, Link } from "@mui/material"
import Colors from "../config/colors"
import Router, { useRouter } from "next/router";


type Props = {
    title: string,
    image: string,
    link: string
}
const ShopCard = (props: Props) =>{

    const { title, image, link } = props
    const router = useRouter()
    return(
        <>
            <Card 
                onClick={()=> console.log('card')}
                sx={{
                    width: '250px',
                    height: '380px',
                    cursor: 'pointer'
                }}
            >
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
                        src={image}
                        alt="image"
                        width={'230px'} 
                        height='200px'
                    />

                <Box textAlign={'center'} color={Colors.primary}>
                    {title}
                </Box>
                </Box>
                <div style={{ position: 'relative' }}>
                <Link href="https://amazon.com">

                    <Button 
                    onClick={(e)=>{
                        e.stopPropagation()
                        router.push('amazon.com')
                        console.log('button')
                    }}
                    style={{ position: 'absolute', bottom: '-90px' }} 
                    fullWidth 
                    size='large' 
                    variant='outlined'
                    >
                    Buy
                    </Button>
                    </Link>
                </div>
                </CardContent>
            </Card>
        </>
    )
}

export default ShopCard;