import VerifiedIcon from '@mui/icons-material/Verified';
import {
  Avatar,
  Box,
  Stack,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';
import * as React from 'react';

function ChannelAvatar() {
  const theme = useTheme();
  return (
    <Stack direction='row' spacing={theme.spacing(1)}>
      <Avatar
        sx={{
          cursor: 'pointer',
        }}
        alt='cnbc channel'
        src='https://yt3.ggpht.com/ytc/AL5GRJUjhtNmp1ncihdNJURsKsaGj5L4lq2pEq_4cN_aVDs=s88-c-k-c0x00ffffff-no-rj'
      />
      <Box>
        <Stack direction='row' alignItems='center' spacing={theme.spacing(0.5)}>
          <Typography
            variant='body2'
            sx={{
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            CNBC International
          </Typography>
          <Tooltip title='Verified'>
            <VerifiedIcon
              sx={{
                width: '14px',
                height: '14px',
              }}
            />
          </Tooltip>
        </Stack>

        <Typography variant='caption'>1.16M subscribers</Typography>
      </Box>
    </Stack>
  );
}

export default ChannelAvatar;
