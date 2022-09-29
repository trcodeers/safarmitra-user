import { Card, CardContent, Box, Button, Link, Typography, Chip } from "@mui/material"
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
                    width: '190px',
                    height: '360px',
                    cursor: 'pointer',
                    position: 'relative'
                }}
            >
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
                        width='150px' 
                        height='150px'
                    />
                    <Box textAlign={'center'}  style={{  }}>
                        {title}
                    </Box>
                </Box>
                
                <Box sx={{ position: 'absolute', bottom:"5vh" }}>        
                    <Chip size="small" label="From Amazon" color="primary" variant="outlined" />
                </Box>
                <Button 
                    fullWidth
                    variant="contained"
                    sx={{ backgroundColor: '#FFDE00', color: '#000000' }}
                    style={{ position: 'absolute', bottom:"0.2vh" }}
                >
                    Buy
                </Button>
            </Card>
        </>
    )
}

export default ShopCard;