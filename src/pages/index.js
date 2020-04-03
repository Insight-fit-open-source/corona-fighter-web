import React from 'react';
import Link from 'next/link';
import Admin from 'src/layout/Admin';
import { Button } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

import IsProtectedPage from 'src/app/lib/firebase/auth/IsProtectedPage';
import Symptoms from 'src/components/Symptoms';

export const Home = () => {
  return (
    <>
      <Admin pageTitle='My Symptoms'>
        <Alert
          severity='warning'
          action={
            <Link href='/survey/[step]' as='/survey/welcome'>
              <Button color='inherit' size='small'>
                Take the Survey
              </Button>
            </Link>
          }>
          <span className='hide-on-mobile'>Take the symptoms survey daily and Help Fight COVID19.</span>
        </Alert>
        <Symptoms />
      </Admin>
    </>
  );
};

export default IsProtectedPage(Home);
