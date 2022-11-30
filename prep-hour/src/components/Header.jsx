import React from "react";
import "../stylesheets/Font.css";
import AppBar from "@mui/material/AppBar";
import { Button, Tab, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import DrawerComp from "./DrawerComp";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const nav = useNavigate();
  const list = ["Home", "About", "Contact"];
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
          {isMatch ? (
            <>
              <DrawerComp />

              <Button
                size="small"
                onClick={() => {
                  fetch("http://localhost:8000/getinfo", {
                    method: "GET",
                    headers: {
                      Accept: "application/json",
                      "Content-Type": "application/json",
                    },
                    credentials: "include",
                  })
                    .then((data) => data.json())
                    .then((data) => {
                      nav("/dashboard");
                    })
                    .catch((err) => {
                      nav("/login");
                    });
                }}
                style={{ textTransform: "none", marginLeft: "auto" }}
                sx={{ ml: "auto" }}
                variant="outlined"
                color="error"
              >
                LOGIN
              </Button>
            </>
          ) : (
            <>
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
                    ></Tab>
                  );
                })}
              </Tabs>

              <Button
                onClick={() => {
                  fetch("http://localhost:8000/getinfo", {
                    method: "GET",
                    headers: {
                      Accept: "application/json",
                      "Content-Type": "application/json",
                    },
                    credentials: "include",
                  })
                    .then((data) => data.json())
                    .then((data) => {
                      nav("/dashboard");
                    })
                    .catch((err) => {
                      nav("/login");
                    });
                }}
                size="large"
                style={{
                  textAlign: "right",
                  textDecoration: "none",
                  textTransform: "none",
                }}
                variant="outlined"
                color="error"
              >
                LOGIN
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
