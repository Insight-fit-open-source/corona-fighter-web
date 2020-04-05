import React from 'react';
import Admin from 'src/layout/Admin';
import LatestStats from 'src/components/LatestStats';


export const Stata = () => {
  return (
    <Admin pageTitle='Latest Stats for Tests of Symptomatic Patients in SA'>
      <LatestStats />
    </Admin>
  );
};

export default Stata;
