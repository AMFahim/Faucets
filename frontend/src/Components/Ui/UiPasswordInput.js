import React from 'react';
import { TextField } from '@mui/material';


const UiPasswordInput = (props) => {


    return (
        <TextField
            margin="normal"
            required
            fullWidth
            name={props.name}
            label={props.label}
            type={props.type}
            id={props.id}
            autoComplete="current-password"
        />
    );
};

export default UiPasswordInput;