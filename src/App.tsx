import DownloadIcon from '@mui/icons-material/Download';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IosShareIcon from '@mui/icons-material/IosShare';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
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
import ChipFilter from './components/ChipFilter';
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
  'display': 'inline-block',
  'whiteSpace': 'nowrap',
  'overflowX': 'scroll',
  'width': '100%',
  'scrollBehavior': 'smooth',
  'WebkitOverflowScrolling': 'touch',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
}));

const RoundButtonBase = styled(ButtonBase)(({ theme }) => ({
  padding: '4px',
  borderRadius: '50%',
}));

function App() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const [showMore, setShowMore] = useState(false);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

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
          <Stack spacing={theme.spacing(3)}>
            <Box
              sx={{
                position: 'relative',
              }}
            >
              <ScrollView ref={scrollRef}>
                <ChipFilter title='All' />
                <ChipFilter title='Denzel Washington' />
                <ChipFilter title='Motivation' />
                <ChipFilter title='Listenable' />
                <ChipFilter title='From ABOVE INSPIRATION' />
                <ChipFilter title='Recently uplodaed' />
                <ChipFilter title='Watched' />
              </ScrollView>
              {showLeftArrow && (
                <Stack
                  direction='row'
                  sx={{
                    '&::after': {
                      content: '""',
                      display: 'block',
                      alignSelf: 'stretch',
                      width: 20,
                      backgroundColor: 'transparent',
                      backgroundImage:
                        'linear-gradient(to right, rgba(255, 255, 255, 1) 40%, rgba(255, 255, 255, 0))',
                    },
                    'position': 'absolute',
                    'top': 0,
                    'left': 0,
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: '#fff',
                    }}
                  >
                    <RoundButtonBase
                      onClick={() => {
                        if (scrollRef.current) {
                          scrollRef.current.scrollLeft -= 50;
                          if (scrollRef.current.scrollLeft === 0) {
                            setShowLeftArrow(false);
                          } else {
                            setShowRightArrow(true);
                            setShowLeftArrow(true);
                          }
                        }
                      }}
                    >
                      <KeyboardArrowLeftIcon />
                    </RoundButtonBase>
                  </Box>
                </Stack>
              )}
              {showRightArrow && (
                <Stack
                  direction='row'
                  sx={{
                    '&::before': {
                      content: '""',
                      display: 'block',
                      alignSelf: 'stretch',
                      width: 20,
                      backgroundColor: 'transparent',
                      backgroundImage:
                        'linear-gradient(to right, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 1))',
                    },
                    'position': 'absolute',
                    'top': 0,
                    'right': 0,
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: '#fff',
                    }}
                  >
                    <RoundButtonBase
                      onClick={() => {
                        if (scrollRef.current) {
                          scrollRef.current.scrollLeft += 50;
                          const maxScrollWidth =
                            scrollRef.current.scrollWidth -
                            scrollRef.current.clientWidth;
                          if (scrollRef.current.scrollLeft === maxScrollWidth) {
                            setShowRightArrow(false);
                          } else {
                            setShowRightArrow(true);
                            setShowLeftArrow(true);
                          }
                        }
                      }}
                    >
                      <KeyboardArrowRightIcon />
                    </RoundButtonBase>
                  </Box>
                </Stack>
              )}
            </Box>

            <Stack spacing={theme.spacing(2)}>
              <VideoThumbnail
                title='Kubernetes: The Documentary [PART 2]'
                duration='31:18'
                channel='Honeypot'
                nbViews='155K'
                creationDate='1 year'
                thumbnail='https://i.ytimg.com/vi/318elIq37PE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCBqX5AAku5dhagHnEZrKJcWfYlsA'
              />
              <VideoThumbnail
                title='I built the same app 10 times // Which JS Framework is best?'
                duration='21:58'
                channel='Fireship'
                nbViews='1.8M'
                creationDate='1 year'
                thumbnail='https://i.ytimg.com/vi/cuHDQhDhvPE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCHwnoH9-IXMclSes9kpPgekA4xSg'
              />
              <VideoThumbnail
                title='Version 3.5 Special Program｜Genshin Impact'
                duration='36:01'
                channel='Genshin Impact'
                nbViews='1.2M'
                creationDate='2 days'
                thumbnail='https://i.ytimg.com/vi/BtEh1Aa0yn4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBuXl_gtRWApto7t6cviLd0nOb_5w'
              />
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
}

export default App;
