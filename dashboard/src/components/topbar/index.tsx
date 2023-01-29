import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

type TopbarProps = {
    handleDrawerToggle: () => void
}

function Topbar({handleDrawerToggle}:TopbarProps) {
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
  </Toolbar>
  )
}

export default Topbar