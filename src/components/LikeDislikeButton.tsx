import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import {
  ButtonBase,
  Divider,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import * as React from 'react';

function LikeDislikeButton() {
  const theme = useTheme();
  return (
    <Stack
      sx={{
        backgroundColor: theme.palette.grey[200],
        borderRadius: '18px',
        height: '36px',
        overflow: 'hidden',
      }}
      justifyContent='space-between'
      direction='row'
      divider={<Divider orientation='vertical' flexItem />}
    >
      <ButtonBase
        sx={{
          padding: '0 10px',
        }}
      >
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='space-between'
          spacing={theme.spacing(1)}
        >
          <ThumbUpOffAltIcon />
          <Typography
            sx={{
              fontSize: '14px',
              fontWeight: 'bold',
            }}
          >
            1.9K
          </Typography>
        </Stack>
      </ButtonBase>

      <ButtonBase
        sx={{
          padding: '0 10px',
        }}
      >
        <ThumbDownOffAltIcon />
      </ButtonBase>
    </Stack>
  );
}

export default LikeDislikeButton;
