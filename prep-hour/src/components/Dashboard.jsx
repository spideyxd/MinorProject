import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import LogoutIcon from "@mui/icons-material/Logout";
import Cards from "./Cards";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

export default function ResponsiveDrawer() {
  const [user, setUser] = React.useState({});
  const nav = useNavigate();

  const getInfo = async () => {
    try {
      const res = await fetch("http://localhost:8000/getinfo", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      setUser(data);
    } catch (err) {
     nav("/login");
    }
  };
  React.useEffect(() => {
    getInfo();
  }, []);

  const { firstName, email, role, graduationYear } = user;

  const userData = [firstName, "JIIT", role, graduationYear];

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {userData.map((text, index) => (
          <ListItem
            style={{ textTransform: "capitalize" }}
            key={text}
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon>
                <DoubleArrowIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem key="Logout" disablePadding>
          <ListItemButton
            onClick={() => {
              fetch("http://localhost:8000/logout", {
                method: "GET",
                headers: {
                  Accept: "appllication/json",
                  "Content-Type": "application/json",
                },
                credentials: "include",
              })
                .then((res) => {
                  nav("/login", { replace: true });
                  if ((res.status = 200)) {
                    const error = new Error(res.error);
                    throw error;
                  }
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton color="inherit" edge="start" onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h5">DashBoard</Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ width: { sm: drawerWidth } }}>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{
            ".MuiDrawer-paper": {
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          mt: "4.5vh",
        }}
      >
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </Box>
    </Box>
  );
}
