import { Grid, Typography } from '@mui/material'
import MyCard from '../../reusable/card'
import AreaChart from '../../reusable/areaChart'
import Table from '../../reusable/table';
import React from 'react'
import { Box } from '@mui/system'

function DashTop() {
  return (
    <Grid className="dashboard" display="flex" flexDirection="column" gap={1}  flex={1} >
      <Grid item className="dashtop" gap={2}  fullWidth display="flex" bgColor="black" height="100%" flex-direction="row">
          <Grid item className="dashtop-left" sm={4} xs={6} display="flex" flex={1}  gap={1}   flexDirection="column" p="12px 20px 30px" >
              <Typography  className="dashtop-left-devices"  variant="devices">Devices</Typography>
              <MyCard/>
              <MyCard/>
              <Typography className="viewAll" fontSize="12px" color="secondary.main" fullWidth alignSelf="center">view all</Typography>
          </Grid>
          <Grid item className="dashtop-right" sm={8} xs={6} display="flex"  flex={3} gap={1}    flexDirection="column"  alignItems="center" p="12px 15px 35px" >
              <Typography  className="dashtop-left-devices"  variant="devices">Probe</Typography>
              <Box display="flex" width="100%" height="100%">
                <AreaChart/>  
              </Box>
              <Typography className="viewAll" fontSize="12px" color="secondary.main" fullWidth alignSelf="center">view all</Typography>
          </Grid>
      </Grid>

      <Grid item  className="dashbottom" display="flex" gap={3} flexDirection="row" width="100%" justifyContent="space-between"  height="100%">
        <Grid  item container display="flex" flexDirection="row" sm={6} className='dashbottom-left' flex={1} padding="10px 0" height="100%">
          <Box  className="lefttable" width="70%" height="100%" m="auto" display="flex" flexDirection="column" gap={1}>
            <Typography  className="dashtop-left-devices"  variant="devices">Devices</Typography> 
            <Table/>
            <Typography className="viewAll" fontSize="12px" color="secondary.main" fullWidth alignSelf="center">view all</Typography>
          </Box>
        </Grid>
        <Grid item container display="flex" flexDirection="row" sm={6} className='dashbottom-left' flex={1} padding="10px 0"  height="100%">
          <Box  className="righttable" width="79%" height="100%" m="auto" display="flex" flexDirection="column" gap={1}>
            <Typography  className="dashtop-left-devices"  variant="devices">Devices</Typography> 
            <Table/>
            <Typography className="viewAll" fontSize="12px" color="secondary.main" fullWidth alignSelf="center">view all</Typography>
          </Box>
          
        </Grid>
      </Grid>

    </Grid>
  )
}

export default DashTop