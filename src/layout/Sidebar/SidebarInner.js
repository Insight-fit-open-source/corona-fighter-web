import React from 'react';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

import Logo from 'src/components/common/Logo';
import { actions } from 'src/store/definitions/auth';
import mainNavLinks from 'src/layout/nav/main';
import secondaryNavLinks from 'src/layout/nav/secondary';
import generateLinks from 'src/layout/nav/generateLinks';
import IsProtectedPage from 'src/app/lib/firebase/auth/IsProtectedPage';

const SidebarInner = props => {
  const router = useRouter();

  const handleSignOut = () => {
    const { signOut } = props;
    signOut();
  };

  return (
    <>
      <div className='branding'>
        <Logo />
      </div>
      <div className='main-nav'>
        {generateLinks(mainNavLinks, router.asPath)}
      </div>
      <div className='secondary-nav'>
        {generateLinks(secondaryNavLinks, router.asPath)}
        <div className='sign-out'>
          <Button variant='text' color='primary' onClick={handleSignOut}>
            Sign Out
          </Button>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(actions.signOutRequested()),
});

export default connect(null, mapDispatchToProps)(IsProtectedPage(SidebarInner));
