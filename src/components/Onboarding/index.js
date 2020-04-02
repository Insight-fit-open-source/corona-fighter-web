import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Button, Typography } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import Logo from 'src/components/common/Logo';

import WithAuth from 'src/app/lib/firebase/auth/WithAuth';
import Form from './Form';
import Styled from './styles';

const OnBoarding = props => {
  const { isAuthenticated, userId, onBoardingComplete } = props;

  const showOnBoarding = isAuthenticated && !onBoardingComplete;
  const [open, setOpen] = React.useState(Boolean(showOnBoarding));

  const closeDialog = () => {
    setOpen(false);
  };

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={() => {}}>
      <Styled.OnBoardingContent>
        <Styled.OnBoardingBody>
          <Typography variant='h2'>Let's Get To Know You.</Typography>
          <Typography variant='body1'>Some basic details will help our analysis of your symptoms. We wouldn't force you and we promise to protect your information. Your honesty will help us help you, and help all South Africans. </Typography>
          <Form close={closeDialog} userId={userId} />
        </Styled.OnBoardingBody>
      </Styled.OnBoardingContent>
    </Dialog>
  );
};

const mapState = state => ({
  onBoardingComplete: state.profile.onBoardingComplete,
});

export default compose(WithAuth, connect(mapState))(OnBoarding);
