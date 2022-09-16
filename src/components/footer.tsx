import { Card, CardContent } from "@mui/material";
import Colors from "../config/colors";


const Footer = () =>{

    return(
        <>
           <Card 
                sx={{ 
                    width: '100%', 
                    height: { lg: '140px', xs: '100px', sm: '100px' }, 
                    backgroundColor: Colors.primary,
                }}
            >
                <div style={{ display: 'flex', justifyContent:'center', alignItems: 'center', flexDirection: 'column' }}>
                    
                    <p>Safar Mitra Inc.</p>
                    <p>All rights resevred 2022 </p>

                    <p>Privacy policy</p>
                </div>
           </Card>
        </>
    )
}

export default Footer;