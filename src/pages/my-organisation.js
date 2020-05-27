import React from 'react';
import IsProtectedPage from 'src/app/lib/firebase/auth/IsProtectedPage';
import WithAuth from 'src/app/lib/firebase/auth/WithAuth';
import Invitations from 'src/components/Invitations';
import OrganisationDetails from 'src/components/OrganisationDetails';
import Admin from 'src/layout/Admin';

export const MyOrganisation = () => {
  return (
    <Admin pageTitle='Setup your organisation'>
      <OrganisationDetails />
      <Invitations />
    </Admin>
  );
};

export default IsProtectedPage(WithAuth(MyOrganisation));
