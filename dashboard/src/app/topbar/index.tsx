import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import {useTheme} from '@mui/material/styles'

type TopbarProps = {
    handleDrawerToggle: () => void
}

function Topbar({handleDrawerToggle}:TopbarProps) {
  const theme = useTheme();

  return (
    <Toolbar>  {/* top bar */}
    <IconButton
      color="inherit"
      aria-label="open drawer"
      edge="start"
      onClick={handleDrawerToggle}
      sx={{ mr: 2, display: { md: 'none' } }}
    >
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" noWrap component="div">
      Responsive drawer
    </Typography>

    <Box display="flex" >
                {/* SEARCH BAR */}
                <Box
                  sx={{display: "flex" , backgroundColor: "primary_bg.main" , borderRadius:"3px"}}
                >
                    <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
                    <IconButton type="button" sx={{ p: 1 }}>
                        <SearchIcon />
                    </IconButton>
                </Box>


                {/* ICONS */}
                <IconButton onClick={theme.palette.toggleDarkMode}>
                    {theme.palette.mode === "light" ? (
                        <DarkModeOutlinedIcon />
                    ) : (
                        <LightModeOutlinedIcon />
                    )}
                </IconButton>
                <IconButton>
                    <NotificationsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <SettingsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <PersonOutlinedIcon />
                </IconButton>
            </Box>

  </Toolbar>
  )
}

export default Topbar







