import { styled, Theme } from '@mui/material';
import { MUIStyledCommonProps } from '@mui/system';
import * as React from 'react';

export type YTPlayerProps = MUIStyledCommonProps<Theme> & {};

const YTPlayerWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
}));

const YTPlayer = (props: YTPlayerProps) => {
  return (
    <YTPlayerWrapper {...props}>
      <iframe
        width='1268'
        height='713'
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
