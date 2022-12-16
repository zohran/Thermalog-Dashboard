import { Grid, Typography } from '@mui/material'
import MyCard from '../../reusable/card'
import AreaChart from '../../reusable/areaChart'
import React from 'react'
import { Box } from '@mui/system'

function DashTop() {
  return (
    <Grid container className="dashtop" gap={2} display="flex" height="50%" flex-direction="row">
        <Grid item className="dashtop-left" display="flex" flex={1}  gap={1}   flexDirection="column" p="12px 20px 30px" >
            <Typography  className="dashtop-left-devices"  variant="devices">Devices</Typography>
            <MyCard/>
            <MyCard/>
        </Grid>
        <Grid item className="dashtop-right" display="flex" flex={3}   gap={2}  flexDirection="column"    p="12px 15px 35px" >
            <Typography  className="dashtop-left-devices"  variant="devices">Devices</Typography>
            <Box display="flex" width="100%" height="100%">
              <AreaChart/>
            </Box>
        </Grid>
    </Grid>
  )
}

export default DashTop