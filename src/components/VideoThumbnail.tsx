import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
  Box,
  ButtonBase,
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
      sx={{
        cursor: 'pointer',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          display: 'inline-block',
          width: '168px',
          height: '94px',
          flex: 1,
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
      <Stack
        sx={{
          flex: 1,
        }}
      >
        <Typography
          variant='body2'
          sx={{
            maxWidth: '202px',
            fontWeight: 'bold',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 2,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {title}
        </Typography>
        <Typography variant='caption'>{channel}</Typography>
        <Stack direction='row' justifyContent='flex-start'>
          <Typography noWrap variant='caption'>
            {nbViews} views
          </Typography>
          <Typography noWrap variant='caption'>
            • {creationDate} ago
          </Typography>
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
