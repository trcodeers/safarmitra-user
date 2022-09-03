import { Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material";

type Props = {
    image: string, 
    name: string, 
    description: string, 
    onClick: () => void
}
const PlaceCard = (props: Props) =>{

    const {image, name, description, onClick } = props

    return(
        <>
            <Card onClick={onClick} key={name} sx={{ width: 300 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={image}
                      alt={name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        {name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>

            
        </>
    )
}

export default PlaceCard;