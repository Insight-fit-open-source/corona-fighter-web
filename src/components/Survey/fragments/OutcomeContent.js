import React from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import { Button, Typography } from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ChevronRight';
import { AnimatePresence, motion } from 'framer-motion';

import { actions } from 'src/store/definitions/survey';

const OutcomesContent = ({ active, outcome = {}, setOutcome }) => {
  if (!active) return null;
  setOutcome(outcome);
  const whatsNext = {
    severe: () => (
      <>
        <Link href='/content/[page]' as='/content/where-to-help'>
          <Button
            variant='contained'
            color='primary'
            endIcon={<ArrowRightIcon />}>
            Where To Get Help
          </Button>
        </Link>
      </>
    ),
    warn: () => (
      <>
        <Link href='/content/[page]' as='/content/general-guidelines'>
          <Button
            variant='contained'
            color='primary'
            endIcon={<ArrowRightIcon />}>
            General Guidelines
          </Button>
        </Link>
      </>
    ),
    normal: () => (
      <>
        <Link href='/latest-stats' as='/latest-stats'>
          <Button
            variant='contained'
            color='primary'
            endIcon={<ArrowRightIcon />}>
            View Latest Stats
          </Button>
        </Link>
      </>
    ),
  };

  return (
    <AnimatePresence exitBeforeEnter>
      {active ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          key='results'>
          <div className='results'>
            <Typography variant='h1' className={outcome.severity}>
              <strong>{outcome.title}</strong>
            </Typography>
            <Typography variant='body1'>{outcome.body}</Typography>
            <Typography variant='h4'>should you test?</Typography>
            <Typography variant='body1'>{outcome.testStatus}</Typography>
            <div className='next'>{whatsNext[outcome.severity]()}</div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

const mapDispatch = dispatch => ({
  setOutcome: outcome => dispatch(actions.surveySelectionSet({ outcome })),
});

export default connect(null, mapDispatch)(OutcomesContent);
