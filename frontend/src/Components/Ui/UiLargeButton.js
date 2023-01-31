import { Button } from '@mui/material';
import React from 'react';



const UiLargeButton = (props) => {
    return (
        <Button
            type={props.type}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor: "#9B1FE9"}}
        >{props.name}</Button>
    );
};

export default UiLargeButton;