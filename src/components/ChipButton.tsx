import { ButtonBase, styled, Theme } from '@mui/material';
import { MUIStyledCommonProps } from '@mui/system';
import * as React from 'react';

export type ChipButtonProps = MUIStyledCommonProps<Theme> &
  React.ComponentProps<typeof ButtonBase>;

const StyledButtonBase = styled(ButtonBase)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '8px',
  alignItems: 'center',
  backgroundColor: theme.palette.grey[300],
  borderRadius: '18px',
  height: '36px',
  padding: '0 10px',
}));

function ChipButton({ children, ...props }: ChipButtonProps) {
  return <StyledButtonBase {...props}>{children}</StyledButtonBase>;
}

export default ChipButton;
