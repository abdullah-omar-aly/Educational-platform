import './App.css'
import {useState} from "react"
import DashboardLayout from './DashboardLayout';
import MainContent from './components/mainContent';
import Sidebar from './components/sidebar';
import Topbar from './components/topbar';

function App() {

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return(
    <DashboardLayout
      mobileOpen={mobileOpen}
      handleDrawerToggle={handleDrawerToggle}
      sidebar={<Sidebar />}
      topbar={<Topbar handleDrawerToggle={handleDrawerToggle} />}
      main={<MainContent />}
    />
  )
}

export default App
