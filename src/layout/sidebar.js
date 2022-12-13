import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import theme from '../theme';



export default function sidebar() {
  return (
    <Grid className="sidebar" container flex={2} display="flex" flexDirection="column" alignItems="center" sx={{bgcolor:"primary.main", height:"100vh", width:"inherit"}}>
      <Grid  item  display="block"  >
        <img src="/assets/logo.svg" className="logo" alt="Logo"  />
      </Grid>
      <Grid item>
        {/* <Typography variant='h2' >Hel2</Typography> */}
      </Grid>
    </Grid>
  );
}