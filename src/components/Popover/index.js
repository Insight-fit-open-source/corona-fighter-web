import React from 'react';
import Link from 'next/link';
import { Button, Typography } from '@material-ui/core';
import ButtonIcon from '@material-ui/icons/ChevronRight';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import { PopoverContent } from 'src/components/Survey/styles';
import steps from 'src/components/Survey/config';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const Popover = () => {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}>
      <PopoverContent
        layoutActive={steps.welcome && steps.welcome.layout !== 'question'}>
        <div className='popover__body'>
          <Typography variant='h1'>How are you feeling?</Typography>
          <Typography variant='body1'>
            Make sure to complete the survey regularly to track your symptoms
          </Typography>
          <Button variant='contained' color='secondary' onClick={handleClose}>
            The same as before
          </Button>
          <Link href='/survey/[step]' as='/survey/feeling'>
            <Button
              variant='contained'
              color='secondary'
              endIcon={<ButtonIcon />}>
              Let's check together
            </Button>
          </Link>
        </div>
      </PopoverContent>
    </Dialog>
  );
};

export default Popover;
