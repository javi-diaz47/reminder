import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import ProfilePicture from "../ProfilePicture";

const Sidebar = ({ user, routes, handleDrawerToggle }) => {
  return (
    <div>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <XMarkIcon className="w-8" />
        </IconButton>
      </Toolbar>
      <List>
        <ProfilePicture url={user?.picture} />
        {routes.map(({ url, text, icon }) => (
          <Link key={text} onClick={handleDrawerToggle} href={url}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
    </div>
  );
};

export { Sidebar };
