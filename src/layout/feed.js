import { Grid, Typography } from '@mui/material';
import Dashboard  from "../components/Dashboard"
import React from 'react'

function feed() {
  return (
    <Grid sx={{mt:"20px"}} >
      <Dashboard />
    </Grid>
  )
}

export default feed