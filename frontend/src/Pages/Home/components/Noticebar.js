import React from 'react';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';


const Noticebar = () => {
    return (
        <div>
            <Stack spacing={2} sx={{ flexGrow: 1 }}>
                    <AppBar position="center" sx={{textAlign: "center", p:"25px", backgroundColor:"#9B1FE9", fontSize: "16px"}} enableColorOnDark>
                        Notice Here
                    </AppBar>
            </Stack>
        </div>
    );
};

export default Noticebar;