import React from 'react';
import Link from 'next/link';
import _ from 'lodash';
import { Button, Typography } from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ChevronRight';
import { connect } from 'react-redux';

import { ChoiceInner, ChoiceNav } from 'src/components/Survey/styles';

const OptionsWrap = ({ step, title, nextLink, children, hasSelection }) => (
  <ChoiceInner>
    <Typography
      variant='h4'
      style={{ textAlign: 'center', fontWeight: 300, paddingTop: '0' }}>
      {title}
    </Typography>
    {children}
    <ChoiceNav>
      <Link href={`/survey/[step]`} as={`${nextLink}`}>
        <Button
          variant='contained'
          color='primary'
          disabled={!hasSelection(step)}
          endIcon={<ArrowRightIcon />}>
          Next
        </Button>
      </Link>
    </ChoiceNav>
  </ChoiceInner>
);

const mapState = state => ({
  hasSelection: (step) =>
    Boolean(_.isArray(state.survey.selected[step]) && state.survey.selected[step].length > 0),
});

export default connect(mapState)(OptionsWrap);
