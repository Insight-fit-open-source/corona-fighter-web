import React from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';

import { StepIndicator } from 'src/components/Survey/fragments';
import { StepsLinkWrap } from 'src/components/Survey/styles';

export const StepLink = ({
  selectionComplete,
  link,
  text,
  number,
  currentStep,
}) => (
  <StepsLinkWrap>
    <StepIndicator
      active={Boolean(link === currentStep)}
      complete={selectionComplete(link)}
      number={number + 1}
    />
    <Link href='/survey/[step]' as={`/survey/${link}`}>
      <a>{text}</a>
    </Link>
  </StepsLinkWrap>
);

const mapState = state => ({
  selectionComplete: step => Boolean(state.survey.selected[step]),
});

export default connect(mapState)(StepLink);
