import './App.css'
import { ThemeProvider } from '@mui/material/styles';

import {useState} from "react"
import MainContent from './app/screens';
import Sidebar from './app/sidebar';
import Topbar from './app/topbar';
import Layout from './app/layout';
import { useMuiTheme } from './theme';

function App() {
  const muiTheme = useMuiTheme()

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return(
    <ThemeProvider theme={muiTheme}>

    <Layout
      mobileOpen={mobileOpen}
      handleDrawerToggle={handleDrawerToggle}
      sidebar={<Sidebar />}
      topbar={<Topbar handleDrawerToggle={handleDrawerToggle} />}
      main={<MainContent />}
    />
    </ThemeProvider>
  )
}

export default App
