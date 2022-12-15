import { Grid, Typography } from '@mui/material'
import MyCard from '../../reusable/card'
import React from 'react'

function DashTop() {
  return (
    <Grid className="dashtop" display="flex" flex-direction="row" gap={1} padding="0 3px" width="100%" height="15rem">
        <Grid item className="dashtop-left" display="flex" flex={1} gap={1} width="100%" height="100%" flexDirection="column" p="12px 15px 35px" >

            <Typography  className="dashtop-left-devices"  variant="devices">Devices</Typography>
            <MyCard/>
            <MyCard/>
        </Grid>
        <Grid item className="dashtop-right" display="flex" flex={2} gap={1} width="100%" height="100%" flexDirection="column" p="12px 15px 35px" >
            <Typography  className="dashtop-left-devices"  variant="devices">Devices</Typography>
            <MyCard/>
            <MyCard/>
        </Grid>
    </Grid>
  )
}

export default DashTop