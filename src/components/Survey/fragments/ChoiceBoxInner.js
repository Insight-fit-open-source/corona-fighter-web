import { Button, Typography } from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ChevronRight';
import _ from 'lodash';
import Link from 'next/link';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { connect } from 'react-redux';
import { ChoiceInner, ChoiceNav } from 'src/components/Survey/styles';

const OptionsWrap = ({
  step,
  title,
  nextLink,
  nextLinkOverrides,
  children,
  hasSelection,
  selectionValue,
}) => (
  <ChoiceInner>
    <Typography
      variant='h4'
      style={{ textAlign: 'center', fontWeight: 300, paddingTop: '0' }}>
      <ReactMarkdown source={title} />
    </Typography>
    {children}
    <ChoiceNav>
      {!!nextLinkOverrides && !!nextLinkOverrides[selectionValue(step)] ? (
        <Link
          href='/survey/[step]'
          as={`${nextLinkOverrides[selectionValue(step)]}`}>
          <Button
            variant='contained'
            color='primary'
            disabled={!hasSelection(step)}
            endIcon={<ArrowRightIcon />}>
            Next
          </Button>
        </Link>
      ) : (
        <Link href='/survey/[step]' as={`${nextLink}`}>
          <Button
            variant='contained'
            color='primary'
            disabled={!hasSelection(step)}
            endIcon={<ArrowRightIcon />}>
            Next
          </Button>
        </Link>
      )}
    </ChoiceNav>
  </ChoiceInner>
);

const mapState = state => ({
  hasSelection: step =>
    Boolean(
      _.isArray(state.survey.selected[step]) &&
        state.survey.selected[step].length > 0,
    ),
  selectionValue: step =>
    !!state.survey.selected[step] && state.survey.selected[step].length > 0
      ? state.survey.selected[step][0]
      : '', // RR: if the array has 0 els dont break , if has nothing return empty otherwise 0
});

export default connect(mapState)(OptionsWrap);
