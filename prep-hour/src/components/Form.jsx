import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import { useNavigate } from "react-router-dom";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import illust from "../DesignAssets/illustForm.png";
import { GoogleOAuthProvider } from '@react-oauth/google';

const theme = createTheme();
const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));


export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const [loginOrSignup, setLoginOrSignup] =useState("Login");

  const history=useNavigate();

  return (
    
    <ThemeProvider theme={theme}>
      <GoogleOAuthProvider clientId="987422048292-sfjo94kjtt7obf190l3sfm31uamtm3to.apps.googleusercontent.com">
      <Grid
        container
        component="main"
        sx={{ height: "80vh", width: "80vw", ml: "10vw", mt: "10vh" }}
      >
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={5}
          md={7}
          sx={{
            backgroundImage: `url(${illust})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
       


          {loginOrSignup=="Login"? ( <>  <Grid item xs={12} sm={7} md={5} component={Paper} elevation={9}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Stack direction="row" spacing={1} alignItems="center">
          <Typography>Login</Typography>
          <AntSwitch onChange={ (event)=>{  if(loginOrSignup=='Login')setLoginOrSignup("signUp");else setLoginOrSignup("Login")}} inputProps={{ 'aria-label': 'ant design' }} />
          <Typography>Signup </Typography>
        </Stack>
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <AccountCircleIcon />
            </Avatar>
            <Typography variant="h4">
              <span style={{ fontFamily: "DM Sans", fontWeight: "800" }}>
                LOGIN
              </span>
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Login
              </Button>

                {/* GOOGLE LOGIN */}

              {/* <GoogleLogin
                onSuccess={(credentialResponse) => {
                  console.log(credentialResponse);
                  const decoded = jwt_decode(credentialResponse.credential);
                  console.log(decoded);
                  history("/dashboard");
                }}

                onError={() => {
                  console.log("Login Failed");
                }}
                
              /> */}

              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    Don't have an account? Sign Up
                  </Link>
                </Grid>
              </Grid>
              {/* <Copyright sx={{ mt: 5 }} />  */}
            </Box>
          </Box>
        </Grid></> ) : ( <>  <Grid item xs={12} sm={7} md={5} component={Paper} elevation={9}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Stack direction="row" spacing={1} alignItems="center">
          <Typography>Login</Typography>
          <AntSwitch onChange={ (event)=>{  if(loginOrSignup=='Login')setLoginOrSignup("signUp");else setLoginOrSignup("Login")}} inputProps={{ 'aria-label': 'ant design' }} />
          <Typography>Signup </Typography>
        </Stack>
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <AccountCircleIcon />
            </Avatar>
            <Typography variant="h4">
              <span style={{ fontFamily: "DM Sans", fontWeight: "800" }}>
                SIGNUP
              </span>
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
              SignUP
              </Button>

                {/* GOOGLE LOGIN */}

              {/* <GoogleLogin
                onSuccess={(credentialResponse) => {
                  console.log(credentialResponse);
                  const decoded = jwt_decode(credentialResponse.credential);
                  console.log(decoded);
                  history("/dashboard");
                }}

                onError={() => {
                  console.log("Login Failed");
                }}
                
              /> */}

             
              {/* <Copyright sx={{ mt: 5 }} />  */}
            </Box>
          </Box>
        </Grid></> )}

      </Grid>
      </GoogleOAuthProvider>
    </ThemeProvider>
  );

}
