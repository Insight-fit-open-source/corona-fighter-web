import React from 'react';
import { ResponsiveStream } from '@nivo/stream';

const ChartStream = ({ settings }) => {
  console.log('settings', settings);

  return <ResponsiveStream {...settings} />;
};

export default ChartStream;
