import React from 'react';
import Admin from 'src/layout/Admin';

import TestingFacilityLocator from 'src/components/TestingFacilityLocator';

export const CareLocator = () => {
  return (
    <Admin pageTitle='Care Locator' isMap>
      <TestingFacilityLocator />
    </Admin>
  );
};

export default CareLocator;
