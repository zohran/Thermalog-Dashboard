import { Grid, Typography } from '@mui/material';
import Dashboard  from "../components/Dashboard"
import React from 'react'

function feed() {
  return (
    <Grid container width="85vw" mt="4rem" height="fit-content"  >
      <Dashboard />
    </Grid>
  )
}

export default feed