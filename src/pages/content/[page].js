import React from 'react';
import Admin from 'src/layout/Admin';
import { withRouter } from 'next/router';

export const Content = ({ router }) => {
  return (
    <Admin pageTitle='New Page'>
      <p>any page content</p>
    </Admin>
  );
};

export default withRouter(Content);
