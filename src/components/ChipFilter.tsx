import { Box, BoxProps, ButtonBase, Typography, useTheme } from '@mui/material';
import * as React from 'react';

type ChipFilterProps = BoxProps & {
  title: string;
};

function ChipFilter({ title, ...props }: ChipFilterProps) {
  const theme = useTheme();
  return (
    <ButtonBase
      sx={{
        overflow: 'hidden',
        margin: '0 4px',
        borderRadius: `${theme.spacing(1)}`,
      }}
    >
      <Box
        {...props}
        sx={{
          backgroundColor: `${theme.palette.grey[300]}`,
          padding: '4px 12px',
        }}
      >
        <Typography variant='subtitle2'>{title}</Typography>
      </Box>
    </ButtonBase>
  );
}

export default ChipFilter;
