import React from 'react';
import { TextField } from '@mui/material';


const UiInput = (props) => {
    return (
        <TextField
        margin="normal"
        required
        fullWidth
        id={props.id}
        label={props.label}
        name={props.name}
        autoComplete={props.autoComplete}
        autoFocus
      />
    );
};

export default UiInput;