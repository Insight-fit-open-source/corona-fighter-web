import React from 'react';
import Admin from 'src/layout/Admin';
import { withRouter } from 'next/router';

import TestingFacilityLocator from 'src/components/TestingFacilityLocator';

const pages = {
  'where-to-help': (
    <Admin noPadding>
      <TestingFacilityLocator />
    </Admin>
  ),
};

export const Content = ({ router }) => {
  return (
    pages[router.query.page] || (
      <Admin pageTitle='New Page'>
        <p>any page content</p>
      </Admin>
    )
  );
};

export default withRouter(Content);
