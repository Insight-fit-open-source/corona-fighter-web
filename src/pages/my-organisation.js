import React from 'react';
import Invitations from 'src/components/Invitations';
import Admin from 'src/layout/Admin';

export const MyOrganisation = () => {
  return (
    <Admin pageTitle='Setup your organisation'>
      <Invitations />
    </Admin>
  );
};

export default MyOrganisation;
