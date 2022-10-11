import { Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import useOnScreen from "../hooks/useOnScreen";

type Props = {
    image: string, 
    name: string, 
    onClick: () => void,
    searchText: string,
    onViewExist: (searchText: string) => void
}
const PlaceCard = (props: Props) =>{
    
    const ref: any = useRef();

    const { image, name, searchText, onClick, onViewExist } = props

    const inViewport = useOnScreen(ref, '150px'); 
 
    useEffect(() =>{
    
      console.log(inViewport)
      if(inViewport){
        console.log(searchText)
          onViewExist(searchText)
      }

    }, [inViewport])

    return(
        <>

            <Card ref={ref} onClick={onClick} key={name} sx={{ width: 300 }}>
              
              <CardActionArea 
                sx={{
                  paddingBottom: '40px'
                }}>
                {image && 
                  <CardMedia
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