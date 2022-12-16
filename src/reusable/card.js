import { Card, CardContent, Stack, Typography } from '@mui/material'
import React from 'react'

function myCard() {
  return (
    <Card className="dashtop-left-card"  display="flex" alignItems="center">
      <Typography className="dashtop-left-card-battery"   display="flex" sx={{fontSize:"0.6rem",justifyContent:"flex-end", color:"#00B071", mt:"3px", mr:"5px", mb:"-16px"}}>56%</Typography>
      <CardContent className="dashtop-left-card-content"  display=" flex" >
        <Stack className="dashtop-left-card-content-container" display="flex"  gap={1} alignSelf="center" flexDirection="row" alignItems="center"  >
              <Stack  className="dashtop-left-card-box" display="flex" flex={1.5} justifyContent="center" alignItems="center"  height="6rem"   sx={{backgroundColor:   "rgba(251, 54, 64, 0.1)", borderRadius:"5px" }}>
                  <Typography variant="temp" >2.5 C</Typography>
              </Stack>
              <Stack className="dashtop-left-card-desc"  display="flex" flex={2} height="5rem" justifyContent="space-between"   >
                  <Typography  className='a' variant='card_title'>Pie Fridge</Typography>
                  <Typography variant='card_desc' color="primary.main">Amet minim mollit deserunt ullamco est sit amet.</Typography>
                  <Typography   variant='card_desc' color="black">1 min ago</Typography>
              </Stack>
          </Stack>
      </CardContent>
    </Card>
  )
}

export default myCard;