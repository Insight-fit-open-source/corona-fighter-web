import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import { Typography } from '@material-ui/core';

import settings from 'src/app/publicSettings';
import Logo from 'src/components/common/Logo';
import AuthLayout from 'src/layout/Auth';
import Styled from './styles';

if (!firebase.apps.length) {
  firebase.initializeApp({ ...settings.FIREBASE_CONFIG });
}

const Auth = () => {
  const firebaseUiConfig = {
    signInFlow: 'redirect',
    credentialHelper: 'none',
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      {
        provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
        defaultCountry: 'ZA',
      },
    ],
  };

  return (
    <AuthLayout>
      <>
        <Styled.TitleWrap>
          <div className='logo'>
            <Logo />
          </div>
          <Typography variant='h1'>
            Welcome To Your Daily Symptom Tracker
          </Typography>
          <Typography variant='body1'>
            Join us to reduce pressure on medical facilities, reduce deaths and
            track the evolution of the disease in our country.
          </Typography>
        </Styled.TitleWrap>
        <StyledFirebaseAuth
          uiConfig={firebaseUiConfig}
          firebaseAuth={firebase.auth()}
        />
      </>
    </AuthLayout>
  );
};

export default Auth;
