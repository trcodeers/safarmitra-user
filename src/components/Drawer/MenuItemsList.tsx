import { useContext } from "react";
import {  FormControlLabel, List, ListItem, ListItemText, Switch } from "@mui/material";
import {useRouter} from 'next/router';
import Link from 'next/link';
import { Tabs } from "../../constants/GlobalConstants";
import DarkModeContext from "../../context/GlobalLoaderContext";
import Colors from "../../config/colors";
 
type Props = {
    onListItemClick?: () => void
}
const MenuItemsList = (props: Props) =>{

    const { onListItemClick } = props
    const router = useRouter()
    const { handleDarkModeChange } = useContext(DarkModeContext);

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row', flexGrow: 1, gap: '40px', color: Colors.white, cursor: 'pointer' }}>
                {Tabs.map((tab: { label: string, route: string }) => (
                    <Link 
                        key={tab.route} 
                        href={tab.route} 
                        passHref
                    >
                        <div style={{ color: router.pathname === tab.route ? 'black' : '', fontSize: '19px' }}>
                            {tab.label}
                        </div>   
                    </Link>
                ))}
            </div>
        </>
      );
 } 

export default MenuItemsList;