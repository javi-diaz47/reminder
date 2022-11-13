import * as React from "react";
import AppBar from "@mui/material/AppBar";

import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import {
  Bars3Icon,
  ChartBarIcon,
  HeartIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";
import { NavbarList } from "../NavbarList";
import Image from "next/image";

const routes = [
  {
    url: "/",
    text: "Inicio",
    icon: <HomeIcon className="w-8" />,
  },
  {
    url: "statistics",
    text: "Estadistica",
    icon: <ChartBarIcon className="w-8" />,
  },
  {
    url: "medicine",
    text: "Medicinas",
    icon: <HeartIcon className="w-8" />,
  },
];
const drawerWidth = 240;

const Navbar = (props) => {
  const { window, children } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <Bars3Icon className="w-8" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <figure
            className={`
              w-12
              h-12
              rounded-full bg-slate-300 relative overflow-hidden 
            `}
          >
            <Image
              src={
                "https://lh3.googleusercontent.com/a/ALm5wu29CN4UC9sUy_F7XVCmac7MmQ_0RXDwepXzFVk0JQ=s96-c"
              }
              alt="foto de perfil"
              layout="fill"
              objectFit="cover"
            />
          </figure>

          <NavbarList routes={routes} handleDrawerToggle={handleDrawerToggle} />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          <NavbarList routes={routes} handleDrawerToggle={handleDrawerToggle} />
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export { Navbar };
