import React from 'react';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';

const Footer = () => {
    return (
        <Stack spacing={2} sx={{ flexGrow: 1 }}>
            <AppBar position="center" sx={{ textAlign: "center", p: "25px", backgroundColor: "white", fontSize: "16px", color: "black" }} >
                © copyright 2022 - All Right Reserved by Faucet
            </AppBar>
        </Stack>
    );
};

export default Footer;