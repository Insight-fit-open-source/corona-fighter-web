import React from 'react';
import Admin from 'src/layout/Admin';
import LatestStats from 'src/components/LatestStats';

export const Home = () => {
  return (
    <Admin pageTitle='Latest Stats'>
      <LatestStats />
    </Admin>
  );
};

export default Home;
