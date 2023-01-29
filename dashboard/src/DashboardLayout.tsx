import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";

type DashboardLayoutProps = {
  sidebar: React.ReactNode;
  topbar: React.ReactNode;
  main: React.ReactNode;
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
};

const drawerWidth = 240;

function DashboardLayout({
  sidebar,
  topbar,
  main,
  mobileOpen,
  handleDrawerToggle,
}: DashboardLayoutProps) {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
        }}
      >
        {topbar}
      </AppBar>
      <Box //sidebar
        className='sidebar'
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer // mobile-sidebar
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {sidebar}
        </Drawer>
        <Drawer // desktop-sidebar
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {sidebar}
        </Drawer>
      </Box>
      <Box // main
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { md: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar /> {/* for margin top for the main */}
        {main}
      </Box>
    </Box>
  );
}

export default DashboardLayout;
