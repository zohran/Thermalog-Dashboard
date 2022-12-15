import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Box, Typography } from '@mui/material';
import ScreenRoutes from '../routes/routes.js'
import { Stack } from '@mui/system';
import styled from '@emotion/styled';


const ComponentsList= styled(Typography)(theme=>({
  display:"flex",
  flexDirection:"column",
  flex:3,
  width:"100%",
  overflow:"hidden",
  
  gap:2,

  '@media (min-width:600px) and (max-width:900px)':{
    padding:"10px 15px"
  },
  '@media (min-width:300px) and (max-width:600px)':{
    padding:"3px 4px"
  },
  '@media (max-width:300px)':{
    padding:"3px 2px"
  }
}))

const Component= styled(Box)(theme=>({
  display:"flex",
  padding:"5px 24px",
  width:"100%" ,
  overflow:"hidden" ,
  alignItems:"center",
  color:"#FFFFFF",
  gap:"1rem",
   
   '@media (min-width:600px) and (max-width:900px)':{
    padding:"5px 1px",
    width:"100%" ,
  },
}))
export default function sidebar() {
  return (
    <Grid className="sidebar" container display="flex" flexDirection="column" alignItems="center"  sx={{bgcolor:"primary.main", height:"100vh", width:"inherit"}}>
      <Grid  item  >
        <img src="/assets/logo.svg" className="logo" alt="Logo"   />
      </Grid>
      <Grid item display="flex" width="100%" >
        <ComponentsList  >
        {
          ScreenRoutes.map(sc=><Component >
            <img src={sc.icon} alt="icon" />
            <Typography variant='side' >{sc.screen}</Typography>
          </Component>  )
        }
        </ComponentsList>
      </Grid>
      <Grid item display="flex" width="100%" mt="100px" >
          <ComponentsList>
            <Component>
              <img src="/assets/setting.svg" alt="icon" />
              <Typography variant='side' >Settings</Typography>
            </Component>
            <Component>
              <img src="/assets/logout.svg" alt="icon" />
              <Typography variant='side' >Logout</Typography>
            </Component>
          </ComponentsList>
      </Grid>
    </Grid>
  );
}