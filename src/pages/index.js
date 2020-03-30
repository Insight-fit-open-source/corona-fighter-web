import React from 'react';
import Link from 'next/link';
import Admin from 'src/layout/Admin';
import data from 'forestry/data/landingPage.json';

export const Home = () => {
  return (
    <Admin pageTitle={data.page_title}>
      <Link href='/survey/[step]' as='/survey/welcome'>
        <a>
          Take The Symptoms Survey
        </a>
      </Link>
      <p>{data.page_body}</p>
    </Admin>
  );
};

export default Home;
