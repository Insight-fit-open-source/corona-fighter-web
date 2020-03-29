import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import mainNavLinks from 'src/layout/nav/main';
import secondaryNavLinks from 'src/layout/nav/secondary';
import generateLinks from 'src/layout/nav/generateLinks';
import IsProtectedPage from 'src/app/lib/firebase/auth/IsProtectedPage';

const SidebarInner = () => {
  const router = useRouter();

  return (
    <>
      <div className='branding'>
        <h3>C19 Se Push</h3>
      </div>
      <div className='main-nav'>{generateLinks(mainNavLinks, router.asPath)}</div>
      <div className='secondary-nav'>{generateLinks(secondaryNavLinks, router.asPath)}</div>
    </>
  );
};

export default IsProtectedPage(SidebarInner);
