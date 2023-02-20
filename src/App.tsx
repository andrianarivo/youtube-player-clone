import DownloadIcon from '@mui/icons-material/Download';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IosShareIcon from '@mui/icons-material/IosShare';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SortIcon from '@mui/icons-material/Sort';
import {
  Box,
  ButtonBase,
  Collapse,
  Grid,
  Paper,
  Stack,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import * as React from 'react';
import { useRef, useState } from 'react';
import ChannelAvatar from './components/ChannelAvatar';
import ChipButton from './components/ChipButton';
import Comment from './components/Comment';
import LikeDislikeButton from './components/LikeDislikeButton';
import PrimarySearchAppBar from './components/PrimarySearchAppBar';
import VideoThumbnail from './components/VideoThumbnail';
import YTPlayer from './components/YTPlayer';

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  fontWeight: 'bold',
}));

const ScrollView = styled(Box)(({ theme }) => ({
  'overflowX': 'scroll',
  'scrollBehavior': 'smooth',
  'WebkitOverflowScrolling': 'touch',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
}));

function App() {
  const boxRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <Stack>
      <PrimarySearchAppBar />
      <Grid
        container
        justifyContent='center'
        sx={{
          marginTop: theme.spacing(1),
        }}
        spacing={theme.spacing(3)}
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
            <Box>
              <Paper
                elevation={0}
                sx={{
                  backgroundColor: theme.palette.grey[200],
                  borderRadius: '12px',
                  padding: theme.spacing(2),
                }}
              >
                <Typography variant='body2'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Incidunt id voluptas quae, maxime maiores aperiam eum,
                  temporibus repellendus non dolor praesentium ea at expedita
                  quod reprehenderit, blanditiis architecto. Ipsum, eius.
                </Typography>
                <Collapse in={showMore} unmountOnExit timeout='auto'>
                  <Typography variant='body2'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Incidunt id voluptas quae, maxime maiores aperiam eum,
                    temporibus repellendus non dolor praesentium ea at expedita
                    quod reprehenderit, blanditiis architecto. Ipsum, eius.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptatibus omnis, veniam at qui quasi, ipsam numquam
                    voluptatum nihil nisi error odit soluta tempore non placeat
                    suscipit exercitationem excepturi minima mollitia. Lorem
                    ipsum dolor, sit amet consectetur adipisicing elit. Cumque
                    illum vitae nesciunt aliquid maxime, reiciendis, animi,
                    explicabo velit itaque magnam provident reprehenderit aut
                    quos eos. Vero ratione harum nesciunt corporis. Lorem ipsum
                    dolor sit amet consectetur, adipisicing elit. Voluptatem
                    optio assumenda laborum repudiandae rem tempore aut
                    consequatur tenetur minus voluptatum, placeat hic laudantium
                    perspiciatis quis repellendus saepe dignissimos eius
                    deserunt.
                  </Typography>
                </Collapse>
                <ButtonBase onClick={handleShowMore}>
                  <Typography
                    variant='button'
                    sx={{
                      fontWeight: 'bold',
                      fontSize: 12,
                    }}
                  >
                    show more
                  </Typography>
                </ButtonBase>
              </Paper>
            </Box>
            <Stack>
              <Stack
                direction='row'
                spacing={theme.spacing(3)}
                alignItems='center'
              >
                <Typography variant='body2'>1,708 Comments</Typography>
                <ButtonBase>
                  <Stack
                    direction='row'
                    spacing={theme.spacing(1)}
                    alignItems='center'
                  >
                    <SortIcon />
                    <Typography variant='body2'>Sort by</Typography>
                  </Stack>
                </ButtonBase>
              </Stack>
            </Stack>
            <Stack spacing={theme.spacing(3)}>
              <Comment
                avatarLetter='F'
                userName='Funky child'
                lastUpdate='2 weeks ago'
                body='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab fugiat debitis deleniti aperiam assumenda, fuga numquam minima cumque doloremque, ullam nihil voluptates quo enim ipsum mollitia quisquam modi. Consectetur, nostrum'
                likeNb='1.8K'
                edited={true}
              />
              <Comment
                avatarLetter='W'
                userName='Will Ipad'
                lastUpdate='8 days ago'
                body='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab fugiat debitis deleniti aperiam assumenda, fuga numquam minima cumque doloremque, ullam nihil voluptates quo enim ipsum mollitia quisquam modi. Consectetur, nostrum'
                likeNb='556'
              />
              <Comment
                avatarLetter='F'
                userName='Leonel Kalupeteka'
                lastUpdate='2 weeks ago'
                body='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab fugiat debitis deleniti aperiam assumenda, fuga numquam minima cumque doloremque, ullam nihil voluptates quo enim ipsum mollitia quisquam modi. Consectetur, nostrum'
                likeNb='1.3K'
              />
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <ScrollView
            display='flex'
            onClick={() => {
              if (boxRef.current) {
                console.log('test');
                boxRef.current.scrollLeft += 50;
              }
            }}
            ref={boxRef}
          >
            <Box>1234567898</Box>
            <Box>1234567898</Box>
            <Box>1234567898</Box>
            <Box>1234567898</Box>
            <Box>1234567898</Box>
            <Box>1234567898</Box>
            <Box>1234567898</Box>
            <Box>1234567898</Box>
            <Box>1234567898</Box>
            <Box>1234567898</Box>
            <Box>1234567898</Box>
            <Box>1234567898</Box>
          </ScrollView>
          <Stack spacing={theme.spacing(2)}>
            <VideoThumbnail
              title='Kubernetes: The Documentary [PART 2]'
              duration='31:18'
              channel='Honeypot'
              nbViews='155K'
              creationDate='1 year'
              thumbnail='https://i.ytimg.com/vi/318elIq37PE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCBqX5AAku5dhagHnEZrKJcWfYlsA'
            />
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
}

export default App;
