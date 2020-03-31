import React from 'react';
import Link from 'next/link';
import Admin from 'src/layout/Admin';
import data from 'forestry/data/landingPage.json';
import Popover from 'src/components/Popover';
import WithAuth from 'src/app/lib/firebase/auth/WithAuth';

export const Home = ({ isAuthenticated }) => {
  return (
    <>
      {isAuthenticated && <Popover />}
      <Admin pageTitle={data.page_title}>
        <Link href='/survey/[step]' as='/survey/welcome'>
          <a>Take The Symptoms Survey</a>
        </Link>
        <p>{data.page_body}</p>
      </Admin>
    </>
  );
};

export default WithAuth(Home);
