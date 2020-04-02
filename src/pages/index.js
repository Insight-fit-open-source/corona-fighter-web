import React from 'react';
import Link from 'next/link';
import Admin from 'src/layout/Admin';
import { Button } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';

import Popover from 'src/components/Popover';
import IsProtectedPage from 'src/app/lib/firebase/auth/IsProtectedPage';
import WithAuth from 'src/app/lib/firebase/auth/WithAuth';
import Symptoms from 'src/components/Symptoms';

export const Home = ({ isAuthenticated }) => {
  return (
    <>
      {isAuthenticated && <Popover />}
      <Admin pageTitle='My Symptoms'>
        <Alert
          severity='info'
          action={
            <Link href='/survey/[step]' as='/survey/welcome'>
              <Button color='inherit' size='small'>
                Take the Survey
              </Button>
            </Link>
          }>
          {/*<AlertTitle>Take The Symptoms Survey, and Help Fight COVID19</AlertTitle>*/}
          Take The Symptoms Survey, and Help Fight COVID19.
        </Alert>

        <Symptoms />
      </Admin>
    </>
  );
};

export default IsProtectedPage(WithAuth(Home));
