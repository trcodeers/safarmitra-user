import { Card, CardContent, Box, Button, Link } from "@mui/material"
import Colors from "../config/colors"

type Props = {
    title: string,
    image: string,
    link: string
}
const ShopCard = (props: Props) =>{

    const { title, image, link } = props
console.log(link)
    return(
        <>
            <Link 
                href={link} 
                target="_blank"
            >
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
                    <a  
                        onClick={(e)=>{
                            e.stopPropagation()
                        }}
                        href={'m'} 
                        target="_blank"
                    >
                        <Button 
                            style={{ position: 'absolute', bottom: '-90px' }} 
                            fullWidth 
                            size='large' 
                            variant='outlined'
                        >
                            Buy
                        </Button>
                    </a>
                </div>
                </CardContent>
            </Card>
            </Link>
        </>
    )
}

export default ShopCard;