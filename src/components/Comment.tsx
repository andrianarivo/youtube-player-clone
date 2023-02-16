import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import { Avatar, Stack, Typography, useTheme } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { StackProps } from '@mui/material/Stack';
import * as React from 'react';

export type CommentProps = StackProps & {
  avatarLetter: string;
  userName: string;
  lastUpdate: string;
  body: string;
  likeNb: string;
  edited?: boolean;
};

function Comment({
  avatarLetter,
  userName,
  lastUpdate,
  body,
  likeNb,
  edited,
  ...props
}: CommentProps) {
  const theme = useTheme();
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);

  return (
    <Stack {...props} direction='row' spacing={theme.spacing(2)}>
      <Avatar
        sx={{
          backgroundColor: `#${randomColor}`,
        }}
      >
        {avatarLetter}
      </Avatar>
      <Stack>
        <Stack direction='row' spacing={theme.spacing(1)}>
          <Typography
            variant='body2'
            sx={{
              fontWeight: 'bold',
            }}
          >
            {userName}
          </Typography>
          <Typography variant='caption'>
            {lastUpdate}
            {edited ? ' (edited)' : ''}
          </Typography>
        </Stack>
        <Typography variant='body2'>{body}</Typography>
        <Stack direction='row' alignItems='center'>
          <IconButton>
            <ThumbUpOutlinedIcon />
          </IconButton>
          <Typography variant='caption'>{likeNb}</Typography>
          <IconButton>
            <ThumbDownOutlinedIcon />
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Comment;
