import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
  Box,
  ButtonBase,
  IconButton,
  Stack,
  StackProps,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import Image from 'mui-image';
import * as React from 'react';
import { useState } from 'react';

const StyledButtonBase = styled(ButtonBase)(({ theme }) => ({
  borderRadius: '50%',
}));

const StyledImage = styled(Image)(({ theme }) => ({
  borderRadius: '8px',
}));

type VideoThumbnailProps = StackProps & {
  title: string;
  duration: string;
  channel: string;
  nbViews: string;
  creationDate: string;
  thumbnail: string;
};

function VideoThumbnail({
  title,
  duration,
  channel,
  nbViews,
  creationDate,
  thumbnail,
  ...props
}: VideoThumbnailProps) {
  const theme = useTheme();
  const [showMore, setShowMore] = useState(false);
  return (
    <Stack
      {...props}
      onMouseEnter={() => {
        setShowMore(true);
      }}
      onMouseLeave={() => {
        setShowMore(false);
      }}
      direction='row'
      spacing={theme.spacing(2)}
      alignItems='flex-start'
    >
      <Box
        sx={{
          position: 'relative',
          display: 'inline-block',
          width: '168px',
          height: '94px',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '100%',
          }}
        >
          <StyledImage src={thumbnail} />
        </Box>
        <Box
          display='inline-block'
          sx={{
            position: 'absolute',
            borderRadius: '4px',
            bottom: 0,
            margin: '3px 4px',
            padding: '0 4px',
            right: 0,
            backgroundColor: '#0008',
          }}
        >
          <Typography
            variant='caption'
            sx={{
              fontWeight: 'bold',
              color: '#fff',
            }}
          >
            {duration}
          </Typography>
        </Box>
      </Box>
      <Stack>
        <Typography
          variant='body2'
          sx={{
            maxWidth: '202px',
            fontWeight: 'bold',
          }}
        >
          {title}
        </Typography>
        <Typography variant='caption'>{channel}</Typography>
        <Stack direction='row'>
          <Typography variant='caption'>{nbViews} views</Typography>
          <Typography variant='caption'>• {creationDate} ago</Typography>
        </Stack>
      </Stack>
      <StyledButtonBase
        sx={{
          visibility: showMore ? 'visible' : 'hidden',
        }}
      >
        <MoreVertIcon />
      </StyledButtonBase>
    </Stack>
  );
}

export default VideoThumbnail;
