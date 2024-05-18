import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import {Typography} from "@mui/material";
import '../styles.scss';

export default function Loader() {
  return (
    <Box className='spinner-container'>
      <CircularProgress className='spinner'/>
        <Typography component="h2" variant="h2" color="primary" gutterBottom>Loading</Typography>
    </Box>
  );
};
