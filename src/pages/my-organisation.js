import { Alert } from '@material-ui/lab';
import React from 'react';
import IsProtectedPage from 'src/app/lib/firebase/auth/IsProtectedPage';
import WithAuth from 'src/app/lib/firebase/auth/WithAuth';
import OrganisationDetails from 'src/components/OrganisationDetails';
import OrganisationInvitations from 'src/components/OrganisationInvitations';
import Admin from 'src/layout/Admin';

export const MyOrganisation = () => {
  return (
    <Admin pageTitle='Setup your organisation'>
      <Alert severity='info'>
        <span className='hide-on-mobile'>
          Update your organisation's details and manage your invitations.
        </span>
      </Alert>
      <OrganisationDetails />

      <OrganisationInvitations />
    </Admin>
  );
};

export default IsProtectedPage(WithAuth(MyOrganisation));
