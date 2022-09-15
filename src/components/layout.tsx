import DekstopDrawer from './Drawer/Drawer';
import Footer from './footer';

const Layout = (props: any) => {
  
    const { children, ...restprops } = props;
    
    return (
      <>   
    
        <DekstopDrawer
          {...restprops}
        >
          {children}
        </DekstopDrawer> 

        <div style={{  }}>
          <Footer/>
        </div>

      </>
    );

}

export default Layout;
