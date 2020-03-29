import React from 'react';
import { Typography } from '@material-ui/core';
import Styled from './styles';

const StatsBox = ({ title, content }) => {
  return (
    <Styled.StatsBox>
      <Typography variant='h3' gutterBottom>
        {title}
      </Typography>
      <Typography variant='h4'>{content}</Typography>
    </Styled.StatsBox>
  );
};

export default StatsBox;
