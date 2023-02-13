import { Grid, Stack } from '@mui/material';
import * as React from 'react';
import PrimarySearchAppBar from './components/PrimarySearchAppBar';
import YTPlayer from './components/YTPlayer';

function App() {
  return (
    <Stack>
      <PrimarySearchAppBar />
      <Grid container justifyContent='space-around'>
        <Grid item xs={1}></Grid>
        <Grid item xs={8}>
          <YTPlayer />
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </Stack>
  );
}

export default App;
