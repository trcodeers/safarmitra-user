import { Card, CardContent } from "@mui/material";
import Colors from "../config/colors";


const Footer = () =>{

    return(
        <>
           <Card 
                sx={{ 
                    width: '100%', 
                    height: {lg: '200px', xs: '120px', sm: '120px' }, 
                    backgroundColor: Colors.primary,
                }}
            >
                <div style={{ marginBottom: '10px', display: 'flex', justifyContent:'center', alignItems: 'center', flexDirection: 'column' }}>
                    
                    <p>Safar Mitra Inc.</p>
                    <p>All rights resevred 2022 </p>

                </div>
           </Card>
        </>
    )
}

export default Footer;