import DekstopDrawer from './Drawer/Drawer';
import Footer from './footer';

const Layout = (props: any) => {
  
    const { children, ...restprops } = props;
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>   
    
        <div style={{ display: 'flex', flexGrow: 1 }}>
          <DekstopDrawer
            {...restprops}
          >
            {children}
          </DekstopDrawer> 
        </div>

        <div style={{ marginTop: '20px'}}>
          <Footer/>
        </div>

      </div>
    );

}

export default Layout;
