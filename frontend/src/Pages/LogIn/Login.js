import React from 'react';
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
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import UiInput from '../../Components/Ui/UiInput';
import UiPasswordInput from '../../Components/Ui/UiPasswordInput';
import UiLargeButton from '../../Components/Ui/UiLargeButton';



const theme = createTheme();


const Login = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
      };

      const googleAuth = () => {
		window.open(
			`${process.env.REACT_APP_API_URL}/auth/google/callback`,
			"_self"
		);
	};
    return (
        <MainLayout>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs" sx={{mb: 3}}>
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
                            Log In
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
                            <UiLargeButton type="submit" name="Log In" />
                            <Grid container>
                                <Grid item className='text-center'>
                                    <Link to="/signup" style={{ textDecoration: "none", color: "black", textAlign: "center" }} variant="body2">
                                        Don't have an account? Sign Up
                                    </Link>
                                    <br />
                                    <span>Or</span>

                                    <div className="flex gap-2">
                                        <GoogleIcon onClick={googleAuth} style={{cursor: "pointer"}}/>
                                        <FacebookIcon className="ms-3" />
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

export default Login;