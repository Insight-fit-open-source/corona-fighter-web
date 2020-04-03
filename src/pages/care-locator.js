import React from 'react';
import dynamic from 'next/dynamic';
import Admin from 'src/layout/Admin';

const DynamicLocator = dynamic(
  import('src/components/TestingFacilityLocator'),
  { ssr: false },
);

export const CareLocator = () => {
  return (
    <Admin pageTitle='Care Locator' isMap>
      <DynamicLocator />
    </Admin>
  );
};

export default CareLocator;
