import React from 'react';
import DoneIcon from '@material-ui/icons/Done';
import StepIndicator from 'src/components/Survey/styles/StepIndicator';

export default ({ active, complete = false, number }) => (
  <StepIndicator active={active} complete={complete} number={number}>
    {complete ? <DoneIcon /> : number}
  </StepIndicator>
);
