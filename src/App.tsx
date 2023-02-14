import DownloadIcon from '@mui/icons-material/Download';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IosShareIcon from '@mui/icons-material/IosShare';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { Grid, Stack, styled, Typography, useTheme } from '@mui/material';
import * as React from 'react';
import ChannelAvatar from './components/ChannelAvatar';
import ChipButton from './components/ChipButton';
import LikeDislikeButton from './components/LikeDislikeButton';
import PrimarySearchAppBar from './components/PrimarySearchAppBar';
import YTPlayer from './components/YTPlayer';

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  fontWeight: 'bold',
}));

function App() {
  const theme = useTheme();
  return (
    <Stack>
      <PrimarySearchAppBar />
      <Grid
        container
        justifyContent='center'
        sx={{
          marginTop: theme.spacing(3),
        }}
      >
        <Grid item xs={7}>
          <Stack spacing={theme.spacing(1)}>
            <YTPlayer />
            <Typography
              variant='h6'
              sx={{
                fontWeight: 'bold',
              }}
            >
              What's going to happen to Big Tech's laid off workers?
            </Typography>
            <Stack
              direction='row'
              justifyContent='space-between'
              alignItems='center'
            >
              <Stack
                direction='row'
                justifyContent='space-between'
                alignItems='center'
                spacing={theme.spacing(2)}
              >
                <ChannelAvatar />
                <ChipButton>
                  <NotificationsOutlinedIcon />
                  <StyledTypography variant='body1'>
                    Subscribed
                  </StyledTypography>
                  <ExpandMoreIcon />
                </ChipButton>
              </Stack>
              <Stack
                direction='row'
                justifyContent='space-around'
                spacing={theme.spacing(1)}
              >
                <LikeDislikeButton />
                <ChipButton>
                  <IosShareIcon />
                  <StyledTypography>Share</StyledTypography>
                </ChipButton>
                <ChipButton>
                  <DownloadIcon />
                  <StyledTypography>Download</StyledTypography>
                </ChipButton>
                <ChipButton>
                  <MoreHorizIcon />
                </ChipButton>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </Stack>
  );
}

export default App;
