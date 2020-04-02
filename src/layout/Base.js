import React from 'react';
import WithAuth from 'src/app/lib/firebase/auth/WithAuth';
import Popover from 'src/components/Popover';
import OnBoarding from 'src/components/Onboarding';
import Styled from './styles';

const Base = ({ children, isAuthenticated }) => (
  <>
    {Styled.GlobalStyle}
    {children}
    {isAuthenticated && <OnBoarding />}
    {isAuthenticated && <Popover />}
  </>
);

export default WithAuth(Base);
