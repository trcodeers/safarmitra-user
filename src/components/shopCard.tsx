import { Card, CardContent, Box, Button, Link, Typography, Chip } from "@mui/material"
import Colors from "../config/colors"

type Props = {
    title: string,
    image: string,
    link: string,
    cardWidth?: string,
    cardHeight?: string,
    imageHeight?: string,
    imageWidth?: string,
    productSource?: string
}
const ShopCard = (props: Props) =>{

    const { title, image, link, productSource, cardHeight, cardWidth, imageHeight, imageWidth  } = props

    return(
        <>
            <Card 
                onClick={()=>{
                    const urlToOpen = new URL(link)
                    window.open(urlToOpen, '_blank')
                }}
                sx={{
                    width: cardWidth || '170px',
                    height: cardHeight || '360px',
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
                        width={imageWidth || '150px'} 
                        height={imageHeight || '150px'}
                    />
                    <Box textAlign='center'>
                        <Typography variant="body2">{title}</Typography>
                    </Box>
                </Box>
                
                {productSource && 
                <Box sx={{ position: 'absolute', bottom:"5vh" }}>        
                    <Chip 
                        sx={{ 
                            '& .MuiChip-label': {
                                overflow: 'visible',
                            }     
                        }} 
                        size="small" 
                        label={'From ' + productSource} 
                        color="primary" 
                        variant="outlined" 
                    />
                </Box>}
                <Button 
                    fullWidth
                    variant="contained"
                    sx={{ backgroundColor: '#FFDE00', color: '#000000' }}
                    style={{ position: 'absolute', bottom:"0.2vh" }}
                    onClick={(e: any)=>{
                        e.stopPropagation()
                        const urlToOpen = new URL(link)
                        window.open(urlToOpen, '_blank')
                    }}
                >
                    View Details
                </Button>
            </Card>
        </>
    )
}

export default ShopCard;