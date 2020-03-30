import React from 'react';
import Link from 'next/link';
import { Button, Typography } from '@material-ui/core';
import { AnimatePresence, motion } from 'framer-motion';

import ButtonIcon from '@material-ui/icons/ChevronRight';

export default ({ active, stepContent ={} }) => {
  const { title, content, next, nextText } = stepContent;
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key='backdrop'>
            <div className='backdrop__content'>
              <Typography variant='h1'>{title}</Typography>
              <Typography variant='body1'>{content}</Typography>
              {next ? (
                <Link href='/survey/[step]' as={`${next}`}>
                  <Button
                    variant='contained'
                    color='secondary'
                    endIcon={<ButtonIcon />}>
                    {nextText}
                  </Button>
                </Link>
              ) : null}
            </div>
            {/*<div className={`backdrop__img ${title ? 'active' : ''}`}>*/}
            {/*  <img src='/auth-banner.jpg' alt='Pizza' />*/}
            {/*</div>*/}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
