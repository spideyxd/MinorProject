import React from "react";
import "../stylesheets/Font.css";
import AppBar from "@mui/material/AppBar";
import { Button, Tab, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import DrawerComp from "./DrawerComp";
import { Link } from "react-router-dom";  


const Header = () => {
  const list = ["Home", "About", "Contact", "Resources"];
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
     
     
        <AppBar
        sx={{ backgroundColor: "#121212" }}
        position="static"
        elevation={0}
      > 
        <Toolbar>
          { isMatch ? (  
            <>         
            <DrawerComp />
           
            
              <Button size="small" component={Link} to="/login" style={{  textTransform:"none", marginLeft:"auto" }} sx={{ ml:"auto" }} variant="outlined" color="error">
              Login / Signup
            </Button>
            
            </>
          ) : (<>
            <Tabs sx={{ mx: "auto" }}>
              {list.map((val) => {
                return (
                  <Tab
                    label={val}
                    style={{
                      color: "white",
                      fontFamily: "Barlow",
                      fontSize: "12px",
                    }}
                  >
                    {" "}
                  </Tab>
                );
              })}
            </Tabs>
            <Link  to="/login" style={{ textAlign:"right",  textDecoration: 'none' }} > 
              <Button size="small"  style={{textTransform:"none"}} variant="outlined" color="error">
              Login / Signup
            </Button></Link>

           
            </>
          )}

          
        
          
        </Toolbar>
      </AppBar>  
    </>
  );
};

export default Header;
