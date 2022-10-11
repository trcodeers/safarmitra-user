import { Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material";

type Props = {
    image: string, 
    name: string, 
    onClick: () => void
}
const PlaceCard = (props: Props) =>{

    const {image, name, onClick } = props

    return(
        <>
            <Card onClick={onClick} key={name} sx={{ width: 300 }}>
                  <CardActionArea sx={{
                    paddingBottom: '40px'
                  }}>
                    {image && <CardMedia
                      component="img"
                      height="240"
                      image={image}
                      alt={name}
                      
                    /> 
                    }
                    <CardContent>
                      <Typography style={{ textAlign: 'center' }} variant="h6" component="div">
                        {name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
            </Card>
        </>
    )
}

export default PlaceCard;