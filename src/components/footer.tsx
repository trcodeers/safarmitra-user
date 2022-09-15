import { Card, CardContent } from "@mui/material";
import Colors from "../config/colors";




const Footer = () =>{

    return(
        <>
           <Card sx={{ position: 'absolute', bottom: 0, width: '100%', height: '200px', backgroundColor: Colors.primary }}>
                <CardContent>
                    <div style={{ display: 'flex', justifyContent:'center', alignItems: 'center', flexDirection: 'column' }}>
                       
                        <p>Safar Mitra Inc.</p>
                        <p>All rights resevred 2022 </p>

                    </div>
                </CardContent>

           </Card>
        </>
    )
}

export default Footer;