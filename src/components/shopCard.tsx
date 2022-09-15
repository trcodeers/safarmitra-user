import { Card, CardContent, Box, Button, Link } from "@mui/material"
import Colors from "../config/colors"

type Props = {
    title: string,
    image: string,
    link: string
}
const ShopCard = (props: Props) =>{

    const { title, image, link } = props
    return(
        <>
            <Card 
                onClick={()=>{
                    const urlToOpen = new URL(link)
                    window.open(urlToOpen, '_blank')
                }}
                sx={{
                    width: '250px',
                    height: '450px',
                    cursor: 'pointer',
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
                        width='250px' 
                        height='250px'
                    />

                <Box textAlign={'center'}  style={{ fontWeight: 'bold' }}>
                    {title}
                </Box>
                </Box>
                <div style={{ position: 'relative' }}>
                    <Button 
                        onClick={(e)=>{
                            e.stopPropagation()
                            const urlToOpen = new URL(link)
                            window.open(urlToOpen, '_blank')
                        }}
                        style={{ position: 'absolute', bottom: '-110px' }} 
                        fullWidth 
                        size='large' 
                        variant='outlined'
                        sx={{ backgroundColor: '#FFDE00', color: '#000000' }}
                    >
                        Buy
                    </Button>
                </div>
                </CardContent>
            </Card>
        </>
    )
}

export default ShopCard;