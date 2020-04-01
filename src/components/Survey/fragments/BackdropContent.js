import React from 'react';
import Link from 'next/link';
import { Button, Typography } from '@material-ui/core';
import { AnimatePresence, motion } from 'framer-motion';

import ButtonIcon from '@material-ui/icons/ChevronRight';

import Logo from 'src/components/common/Logo';

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
              <Logo styles={{ width: '12rem', marginBottom: '1.5rem' }} />
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
