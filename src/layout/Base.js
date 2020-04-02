import React from 'react';
import WithAuth from 'src/app/lib/firebase/auth/WithAuth';
import Popover from 'src/components/Popover';
import OnBoarding from 'src/components/Onboarding';

const Base = ({ children, isAuthenticated }) => (
  <>
    {children}
    {isAuthenticated && <OnBoarding />}
    {isAuthenticated && <Popover />}
  </>
);

export default WithAuth(Base);
