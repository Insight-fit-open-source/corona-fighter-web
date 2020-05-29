import { Alert } from '@material-ui/lab';
import React from 'react';
import IsProtectedPage from 'src/app/lib/firebase/auth/IsProtectedPage';
import WithAuth from 'src/app/lib/firebase/auth/WithAuth';
import OrganisationDetails from 'src/components/OrganisationDetails';
import OrganisationInvitations from 'src/components/OrganisationInvitations';
import Admin from 'src/layout/Admin';

export const MyOrganisation = props => {
  return (
    <Admin pageTitle='Setup your organisation'>
      <Alert severity='info'>
        <span className='hide-on-mobile'>
          Here you can setup your orgnisation and invite users to take the
          survey. Once a user completes a survey, it will be send to the email
          address you have set.
        </span>
      </Alert>
      <OrganisationDetails />

      <OrganisationInvitations {...props} />
    </Admin>
  );
};

export default IsProtectedPage(WithAuth(MyOrganisation));
