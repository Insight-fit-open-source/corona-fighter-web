import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import settings from 'src/app/publicSettings';
import firebase from 'firebase';
import { Typography } from '@material-ui/core';

import AuthLayout from '../../layout/Auth';
import Styled from './styles';

if (!firebase.apps.length) {
  firebase.initializeApp({ ...settings.FIREBASE_CONFIG });
}

const Auth = () => {
  const firebaseUiConfig = {
    signInFlow: 'popup',
    credentialHelper: 'none',
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    ],
  };

  return (
    <AuthLayout
      body={
        <>
          <Styled.TitleWrap>
            <Typography variant='h1' id='title'>
              Corona Se Push
            </Typography>
          </Styled.TitleWrap>
          <StyledFirebaseAuth
            uiConfig={firebaseUiConfig}
            firebaseAuth={firebase.auth()}
          />
        </>
      }
    />
  );
};

export default Auth;
