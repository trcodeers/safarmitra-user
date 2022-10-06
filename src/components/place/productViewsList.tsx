import { ImageList, ImageListItem, ListSubheader, Typography } from "@mui/material"
import Colors from "../../config/colors"
import ShopCard from "../shopCard"

type Props = {
    data: Array<any>
}

const ProductViewsList = (props: Props) =>{

    const { data } = props
    
    return(
        <> 
            <Typography textAlign={'center'} style={{ color: Colors.primary }} variant="h6">
                Recomanded product for 
            </Typography>
            
            <ImageList sx={{ overflowX: 'auto' }} rowHeight={360}>   
                <ImageListItem sx={{display: 'flex', flexDirection: 'row'}}>
                    {data.map((item) =>{
                        const { title , link, image } = item
                        return(
                            <ShopCard
                                key={title}
                                title={title}
                                link={link}
                                image={image}                            
                            />
                            )
                    })}
                </ImageListItem>
            </ImageList>

        </>
    )

}

export default ProductViewsList;