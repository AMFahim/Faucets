import React from 'react';
import UiInput from '../../Components/Ui/UiInput';
import MainLayout from '../../Layout/MainLayout';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import UiPasswordInput from '../../Components/Ui/UiPasswordInput';
import UiLargeButton from '../../Components/Ui/UiLargeButton';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

const theme = createTheme();


const SignUp = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  return (
    <MainLayout>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
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
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <UiInput
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
              <UiPasswordInput
                name="password"
                label="Password"
                type="password"
                id="password"
              />
              <UiLargeButton type="submit" name="Sign Up"/>
              <Grid container>
                <Grid item className='text-center'>
                  <Link to="/login" style={{textDecoration: "none", color: "black", textAlign: "center"}} variant="body2">
                    Already Have an account? Log In
                  </Link>
                  <br/>
                  <span>Or</span>

                  <div className="flex gap-2">
                    <GoogleIcon/>
                    <FacebookIcon className="ms-3"/>
                  </div>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </MainLayout>
  );
};

export default SignUp;