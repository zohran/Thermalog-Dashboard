import './App.css';
import Sidebar from './layout/sidebar';
import Topbar from './layout/topbar';
import Feed from './layout/feed';
import AreaChart from './reusable/areaChart';
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

function App() {
  return (
    // <AreaChart/>
   <Box sx={{ flexGrow:1, }}>
      <Grid container gap={2}>
        <Grid item lg={2}  xs={2} sx={{ height:"100vh"}}>
          <Sidebar/>
        </Grid>
        <Grid item display="flex" sx={{flexFlow:"column"}} height="100%" >
          <Topbar />
          <Feed />
        </Grid>
      </Grid>
   </Box>
  );
}

export default App;
