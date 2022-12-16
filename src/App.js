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
  //  <Box sx={{ flexGrow:1, }}>
      <Grid display="flex" flexDirection="row" gap={2}>
        <Grid item  sx={{ height:"100vh"}}>
          <Sidebar/>
        </Grid>
        <Grid item display="flex" flexDirection="column" alignItems="center"   >
          <Topbar />
          <Feed />
        </Grid>
      </Grid>
  //  </Box>
  );
}

export default App;
