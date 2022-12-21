import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import theme from "../config/mui";
import { Paper } from '@mui/material';
import { useState } from 'react';
import DarkModeContext from '../context/GlobalLoaderContext';
import { PaletteSettings } from '../config/setting';
import Footer from '../components/footer';
import GlobalLoaderContext from '../context/GlobalLoaderContext';

function MyApp({ Component, pageProps }: AppProps) {

  const [newTheme, setNewTheme] = useState(theme)
  const [loader, setLoader] = useState(false)

  const handleDarkModeChange = () => {
    setNewTheme(createTheme({
      ...newTheme,
      palette: {
        mode: newTheme.palette?.mode === 'light' ? 'dark' : 'light',
        ...PaletteSettings        
      },
    }))
  }
 
  return (
          <GlobalLoaderContext.Provider value={{ loader, setLoader }}>
          {/* <DarkModeContext.Provider value={{ handleDarkModeChange }}> */}
            <ThemeProvider theme={newTheme}>
                  <Paper elevation={0} square={true} style={{ minHeight: '100vh'}}>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                  </Paper>
            </ThemeProvider>
          {/* </DarkModeContext.Provider> */}
          </GlobalLoaderContext.Provider>
        )
}

export default MyApp
