import React from 'react';
import Link from 'next/link';
import Admin from 'src/layout/Admin';
import data from 'forestry/data/landingPage.json';
import Popover from 'src/components/Popover';
import IsProtectedPage from 'src/app/lib/firebase/auth/IsProtectedPage';
import WithAuth from 'src/app/lib/firebase/auth/WithAuth';
import Symptoms from 'src/components/Symptoms';

export const Home = ({ isAuthenticated }) => {
  return (
    <>
      {isAuthenticated && <Popover />}
      <Admin pageTitle='My Symptoms'>
        <Link href='/survey/[step]' as='/survey/welcome'>
          <a>Take The Symptoms Survey</a>
        </Link>
        <Symptoms />
      </Admin>
    </>
  );
};

export default IsProtectedPage(WithAuth(Home));
