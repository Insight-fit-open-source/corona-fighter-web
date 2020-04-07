import React from 'react';
import dynamic from 'next/dynamic';
import WithAuth from 'src/app/lib/firebase/auth/WithAuth';
const Popover = dynamic(import('src/components/Popover'), { ssr: false });
const OnBoarding = dynamic(import('src/components/Onboarding'), { ssr: false });

const Base = ({ children, isAuthenticated }) => (
  <>
    {children}
    {isAuthenticated && <OnBoarding />}
    {isAuthenticated && <Popover />}
  </>
);

export default WithAuth(Base);
