import { Alert } from '@material-ui/lab';
import React from 'react';
import IsProtectedPage from 'src/app/lib/firebase/auth/IsProtectedPage';
import WithAuth from 'src/app/lib/firebase/auth/WithAuth';
import Admin from 'src/layout/Admin';

export const Profile = props => {
  return (
    <Admin pageTitle='Setup your profile'>
      <Alert severity='info'>
        <span className='hide-on-mobile'>
          Here you can manage the organisations that have invited you. Provide
          an invite code below to accept an invitation
        </span>
      </Alert>
      {/* { <UserInvitations {...props} /> } */}
    </Admin>
  );
};

export default IsProtectedPage(WithAuth(Profile));
