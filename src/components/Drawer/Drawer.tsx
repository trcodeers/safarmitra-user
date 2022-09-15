import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { GlobalConstants, Tabs } from '../../constants/GlobalConstants';
import MenuItemsList from './MenuItemsList';
import Colors from "../../config/colors";
import { useRouter } from 'next/router';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

interface Props {
  window?: () => Window;
  children: any
}

const drawerWidth = '100%';

export default function DekstopDrawer(props: Props) {
  
  const AppName = GlobalConstants.APP_Name
  const navItems = Tabs;
  const router = useRouter()

  const { window, children } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', backgroundColor: Colors.primary }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        {AppName}   
        <div style={{ position: 'absolute', right: 18, top: 20}}>
          <CancelOutlinedIcon fontSize='large'/>
        </div>        

      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem onClick={() => router.push(item.route)} key={item.label} disablePadding >
            <ListItemButton selected = { item.route === router.pathname } sx={{ fontFamily:'monospace', textAlign: 'center', color: Colors.white }}>
              <ListItemText>
                <div style={{ fontFamily: 'monospace', backgroundColor: item.route === router.pathname ? 'black' : ''}}>{item.label}</div>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{  }}>
      <AppBar sx={{ height: { xs: '70px' } }} position="fixed" component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ color: Colors.white, fontWeight: '600', flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
            onClick={() => router.push('/')}
            style={{ cursor: 'pointer' }}
          >
            {AppName}
          </Typography>
          <IconButton
            color="inherit"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ ml: 2, display: { sm: 'none' } }}
          >
            <MenuIcon fontSize='large' />
          </IconButton>
          <Box sx={{marginRight: '100px', display: { xs: 'none', sm: 'block' } }}>
            <MenuItemsList />
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
          }}
          anchor='top'
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ marginTop: { xs: '14px', sm: '0px', lg: '7px' } }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
