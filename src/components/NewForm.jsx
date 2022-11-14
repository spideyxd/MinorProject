import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import * as yup from 'yup';
import { useFormik } from 'formik';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    firstName: yup
      .string('Enter your first name')
      .min(2, 'First Name should be of minimum 2 characters length')
      .required('First Name is required'),
      lastName: yup
      .string('Enter your last name')
      .min(2, 'Last Name should be of minimum 2 characters length')
      .required('Last Name is required'),
      purpose: yup
      .string('Enter your purpose')
      .min(20, 'purpose should be of minimum 20 characters length')
      .required('Purpose is required'),
      graduationYear:yup.string('Enter Your Graduation Year').required('Graduation is Required')
  });
  

export default function EnterDetails() {

   const formik = useFormik({
    initialValues: {
        graduationYear:'',
        firstName:'',
        lastName:'',
        purpose:'',
        email:'',      
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
        console.log(values);
    },
  });

  const myStyle = {
    borderRadius: "5px",
    color: "white",
    backgroundColor: "#ffffff",
    padding: "10px",
  };

  
//   const domains = [
//     "SDE",
//     "App Development",
//     "Web Development",
//     "Analytics",
//     "Non-Tech",
//   ];


  return (

        <form onSubmit={formik.handleSubmit}>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Box
        style={myStyle}
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" style={{ color:"#121212"}}  variant="h4">
            Enter Details
          </Typography>
          <Box component="form" sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  value={formik.values.firstName}
          onChange={formik.handleChange}
          error={formik.touched.firstName&& Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={formik.values.lastName}
          onChange={formik.handleChange}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="purpose"
                  label="Purpose"
                  id="purpose"
                  autoComplete="purpose"
                  value={formik.values.purpose}
          onChange={formik.handleChange}
          error={formik.touched.purpose && Boolean(formik.errors.purpose)}
          helperText={formik.touched.purpose && formik.errors.purpose}
                />
              </Grid>
              <Grid item maxWidth="xs">
          <FormControl style={{ minWidth: "14vw" }}>
            <InputLabel id="demo-simple-select-label">
              Graduation Year
            </InputLabel>
            <Select
              labelId="graduationYear"
              id="graduationYear"
              name="graduationYear"
              value={formik.values.graduationYear}
              label="Graduation Year"
                onChange={formik.handleChange}
                error={formik.touched.graduationYear && Boolean(formik.errors.graduationYear)}
          helperText={formik.touched.graduationYear && formik.errors.graduationYear}

            >
              <MenuItem value={2023}>2023</MenuItem>
              <MenuItem value={2024}>2024</MenuItem>
              <MenuItem value={2025}>2025</MenuItem>
              <MenuItem value={2026}>2026</MenuItem>
              <MenuItem value={2027}>2027</MenuItem>
              <MenuItem value={2028}>2028</MenuItem>
            </Select>
          </FormControl>
        </Grid>
            </Grid>
            <Button
            onClick={formik.handleSubmit}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
            
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
      </form>
  );
}