import { Card, CardContent, Stack, Typography } from '@mui/material'
import React from 'react'

function myCard() {
  return (
    <Card className="dashtop-left-card"  display="flex" sx={{ height:"50%"}}   >
                <Typography className="dashtop-left-card-battery"   display="flex" sx={{fontSize:"0.5rem",justifyContent:"flex-end", color:"darkgreen", mt:"3px", mr:"5px", mb:"-16px"}}>56%</Typography>
                <CardContent className="dashtop-left-card-content" sx={{height:"5rem"}}  >
                  <Stack className="dashtop-left-card-content-container"  display="flex" gap={1}  flexDirection="row" alignItems="center" sx={{height:"3rem"}}   >
                        <Stack  className="dashtop-left-card-box" display="flex" flex={1} justifyContent="center" alignItems="center" height="4rem" sx={{backgroundColor:   "rgba(251, 54, 64, 0.1)", borderRadius:"5px"}}>
                            <Typography variant="temp" >2.5 C</Typography>
                        </Stack>
                        <Stack className="dashtop-left-card-desc"  display="flex" flex={2}  justifyContent="center"   >
                            <Typography  className='a' variant='card_title'>Pie Fridge</Typography>
                            <Typography variant='card_desc' color="primary.main">Amet minim mollit deserunt ullamco est sit amet.</Typography>
                        </Stack>
                    </Stack>
                </CardContent>
    </Card>
  )
}

export default myCard;