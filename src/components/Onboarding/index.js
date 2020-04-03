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
  const {
    isAuthenticated,
    userId,
    onBoardingComplete,
    authInProcess,
    profileSyncInProcess,
  } = props;
  const [open, setOpen] = React.useState(Boolean(false));

  const closeDialog = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    setOpen(
        !profileSyncInProcess &&
        !authInProcess &&
        isAuthenticated &&
        !onBoardingComplete,
    );
  }, [
    profileSyncInProcess,
    onBoardingComplete,
    authInProcess,
    isAuthenticated,
  ]);

  return (
    <Dialog fullScreen open={open} onClose={() => {}}>
      <Styled.OnBoardingContent>
        <Styled.OnBoardingBody>
          <Typography variant='h2'>Let's Get To Know You.</Typography>
          <Typography variant='body1'>
            Some basic details will help our analysis of your symptoms. We
            wouldn't force you and we promise to protect your information. Your
            honesty will help us help you, and help all South Africans.{' '}
          </Typography>
          <Form close={closeDialog} userId={userId} />
        </Styled.OnBoardingBody>
      </Styled.OnBoardingContent>
    </Dialog>
  );
};

const mapState = state => ({
  onBoardingComplete: state.profile.onBoardingComplete,
  profileSyncInProcess: state.profile.profileSyncInProcess,
});

export default compose(WithAuth, connect(mapState))(OnBoarding);
