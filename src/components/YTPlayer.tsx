import { Box, styled, Theme } from '@mui/material';
import { MUIStyledCommonProps } from '@mui/system';
import * as React from 'react';

export type YTPlayerProps = MUIStyledCommonProps<Theme> & {};

const YTPlayerWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'flex-end',
  width: '100%',
  paddingTop: '56.25%',
}));

const StyledIframe = styled('iframe')(({ theme }) => ({
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
}));

const YTPlayer = (props: YTPlayerProps) => {
  return (
    <YTPlayerWrapper {...props}>
      <StyledIframe
        frameBorder={0}
        src='https://www.youtube.com/embed/FVsGAoFlw20'
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen
      />
    </YTPlayerWrapper>
  );
};

export default YTPlayer;
