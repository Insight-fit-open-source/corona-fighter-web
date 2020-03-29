import React from 'react';
import Admin from 'src/layout/Admin';
import data from 'forestry/data/landingPage.json';

export const Home = () => {
  return (
    <Admin pageTitle={data.page_title}>
      <p>{data.page_body}</p>
    </Admin>
  );
};

export default Home;
