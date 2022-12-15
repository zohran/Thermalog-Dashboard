import { Box, Stack } from '@mui/system'
import { Button, Grid, IconButton, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Avatar from '@mui/material/Avatar';

import React from 'react'
import styled from '@emotion/styled';

const User = styled(Typography)(theme=>({
  fontSize:"32px", 
  fontWeight:"700", 
  lineHeight:"44px",
  color:"black"
}))

const UserDesc = styled(Typography)(theme=>({
  fontSize:"14px", 
  fontWeight:"300", 
  lineHeight:"5px",
  color:"gray"
}))

const TopbarRight= styled(Button)(theme=>({

  '@media (min-width:600px) and (max-width:900px)':{
    startIcon:{
      display:"none"
    }
  }
}))


function topbar() {

  return (
    <Grid container className="topbar" width="80vw" display="flex" justifyContent="space-between"> 
      <Grid item>
          <Typography className="topbar-left-user" variant='h1'>
            Welcome, Dev
          </Typography>
          <Typography className="topbar-left-user-desc" variant='h3' color="primary.main">
            Here's what's happening in your Cake account
          </Typography>
      </Grid>
      <Grid item display="flex" alignItems="center">
        <Stack direction="row" className="topbar-right-icons" sx={{display:{xs:"none",sm:"block"}}}>
        <IconButton>
          <SearchIcon/>
        </IconButton>
        <IconButton>
          <NotificationsIcon/>
        </IconButton>
        </Stack>
        <TopbarRight disableRipple sx={{p:"3px 10px"}} className="topbar-right-dropdown" onClick={()=>console.log("clicked")} startIcon={<Avatar sx={{ bgcolor: "orange", width:"24px",height:"24px" }} />} endIcon={<KeyboardArrowDownIcon/>}>
                 Soccer10
        </TopbarRight>
      </Grid>
    </Grid>

  )
}

export default topbar