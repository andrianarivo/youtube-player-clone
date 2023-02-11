import { Grid, Stack } from '@mui/material';
import * as React from 'react';
import PrimarySearchAppBar from './components/PrimarySearchAppBar';
import YTPlayer from './components/YTPlayer';

function App() {
  return (
    <Stack>
      <PrimarySearchAppBar />
      <Grid container justifyContent='space-around'>
        <YTPlayer />
      </Grid>
    </Stack>
  );
}

export default App;
