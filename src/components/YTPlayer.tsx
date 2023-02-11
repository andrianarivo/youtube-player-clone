import * as React from 'react';

const YTPlayer = () => {
  return (
    <iframe
      width='560'
      height='315'
      frameBorder={0}
      src='https://www.youtube.com/embed/FVsGAoFlw20'
      title='YouTube video player'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
      allowFullScreen
    />
  );
};

export default YTPlayer;
