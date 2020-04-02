import React from 'react';
import Link from 'next/link';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Button, Typography } from '@material-ui/core';
import ButtonIcon from '@material-ui/icons/ChevronRight';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';

import WithAuth from 'src/app/lib/firebase/auth/WithAuth';
import VirusBg from 'src/components/common/VirusBg';
import Form from './Form';
import Styled from './styles';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const OnBoarding = props => {
  const { isAuthenticated, onBoardingComplete } = props;

  const showOnBoarding = isAuthenticated && !onBoardingComplete;
  const [open, setOpen] = React.useState(Boolean(showOnBoarding));

  const handleSubmit = () => {
    setOpen(false);
  };

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={() => {}}
      TransitionComponent={Transition}>
      <VirusBg styles={{ zIndex: 100 }} />
      <Styled.OnBoardingContent>
        <Styled.OnBoardingBody>
          <Typography variant='h2'>Let's Get To Know You.</Typography>
          <Typography variant='body1'>Some basic details will help our analysis of your symptoms. We wouldn't force you and we promise to protect your information. Your honesty will help us help you, and help all South Africans. </Typography>
          <Form />
          {/*<Link href='/survey/[step]' as='/survey/feeling'>*/}
          {/*  <Button*/}
          {/*    variant='contained'*/}
          {/*    color='primary'*/}
          {/*    endIcon={<ButtonIcon />}>*/}
          {/*    ok*/}
          {/*  </Button>*/}
          {/*</Link>*/}
        </Styled.OnBoardingBody>
      </Styled.OnBoardingContent>
    </Dialog>
  );
};

const mapState = state => ({
  onBoardingComplete: state.profile.onBoardingComplete,
});

export default compose(WithAuth, connect(mapState))(OnBoarding);
