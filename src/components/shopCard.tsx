import { Card, CardContent, Box, Button, Link, Typography } from "@mui/material"
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
                    width: '200px',
                    height: '350px',
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
                            width='150px' 
                            height='130px'
                        />
                        <Box textAlign={'center'}  style={{ fontWeight: 'bold' }}>
                            {title}
                        </Box>
                    </Box>
                    <Typography variant="body2">From Amazon</Typography>
                    <div style={{ position: 'relative' }}>
                        <Button 
                            onClick={(e)=>{
                                e.stopPropagation()
                                const urlToOpen = new URL(link)
                                window.open(urlToOpen, '_blank')
                            }}
                            style={{ position: 'absolute',  bottom: 0 }} 
                            fullWidth 
                            size='large' 
                            variant='contained'
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