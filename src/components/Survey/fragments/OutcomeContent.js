import React from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import { Button, Typography } from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ChevronRight';
import { AnimatePresence, motion } from 'framer-motion';

import Logo from 'src/components/common/Logo';
import { actions } from 'src/store/definitions/survey';
import VirusBg from 'src/components/common/VirusBg';

const OutcomesContent = ({ active, outcome = {}, setOutcome }) => {
  if (!active) return null;

  React.useEffect(() => {
    setOutcome(outcome);
  }, [active]);

  const whatsNext = {
    severe: () => (
      <>
        <Link href='/content/[page]' as='/content/where-to-get-help'>
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
            <Logo styles={{ width: '12rem', margin: '0 0 1.5rem 0' }} />
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
      <VirusBg />
    </AnimatePresence>
  );
};

const mapDispatch = dispatch => ({
  setOutcome: outcome => dispatch(actions.surveySelectionSet({ outcome })),
});

export default connect(null, mapDispatch)(OutcomesContent);
