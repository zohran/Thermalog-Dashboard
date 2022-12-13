import './App.css';
import Sidebar from './layout/sidebar';
import Topbar from './layout/topbar';
import Feed from './layout/feed';
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';

function App() {
  return (
   <Box sx={{ flexGrow:1, }}>
      <Grid container gap={2}>
        <Grid item lg={2}  xs={2} sx={{ height:"100vh"}}>
          <Sidebar/>
        </Grid>
        <Grid item lg={6} xs={4}>
          <Topbar/>
        </Grid>
      </Grid>
   </Box>
  );
}

export default App;
