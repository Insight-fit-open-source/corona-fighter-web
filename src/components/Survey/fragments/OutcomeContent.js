import { Button, Typography } from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ChevronRight';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { connect } from 'react-redux';
import Logo from 'src/components/common/Logo';
import Social from 'src/components/common/Social';
import VirusBg from 'src/components/common/VirusBg';
import { actions } from 'src/store/definitions/survey';

const OutcomesContent = ({ active, outcome = {}, setOutcome }) => {
  if (!active) return null;

  React.useEffect(() => {
    setOutcome(outcome);
  }, [active]);

  const whatsNext = {
    severe: () => (
      <>
        <Link href='/care-locator' as='/care-locator'>
          <Button
            variant='contained'
            color='primary'
            endIcon={<ArrowRightIcon />}>
            Where To Get Help
          </Button>
        </Link>
        <Link href='/content/[page]' as='/content/how-to-stay-safe'>
          <Button
            variant='outlined'
            color='secondary'
            endIcon={<ArrowRightIcon />}>
            How To Stay Safe
          </Button>
        </Link>
      </>
    ),
    warn: () => (
      <>
        <Link href='/content/[page]' as='/content/how-to-stay-safe'>
          <Button
            variant='contained'
            color='primary'
            endIcon={<ArrowRightIcon />}>
            How To Stay Safe
          </Button>
        </Link>
        <Link href='/content/[page]' as='/content/how-to-help'>
          <Button
            variant='outlined'
            color='secondary'
            endIcon={<ArrowRightIcon />}>
            How To Help
          </Button>
        </Link>
      </>
    ),
    normal: () => (
      <>
        <Link href='/content/[page]' as='/content/how-to-help'>
          <Button
            variant='contained'
            color='primary'
            endIcon={<ArrowRightIcon />}>
            How To Help
          </Button>
        </Link>
        {/* <Link href='/latest-stats' as='/latest-stats'>
          <Button
            variant='outlined'
            color='secondary'
            endIcon={<ArrowRightIcon />}>
            Latest Stats
          </Button>
        </Link> */}
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
            <div className='social-wrap'>
              <Typography variant='h5'>
                Share this tool with your loved ones and help fight COVID19.
              </Typography>
              <Social invert left />
            </div>
          </div>
          <VirusBg />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

const mapDispatch = dispatch => ({
  setOutcome: outcome => dispatch(actions.surveySelectionSet({ outcome })),
});

export default connect(null, mapDispatch)(OutcomesContent);
