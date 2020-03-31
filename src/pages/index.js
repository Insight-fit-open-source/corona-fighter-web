import React from 'react';
import Link from 'next/link';
import Admin from 'src/layout/Admin';
import data from 'forestry/data/landingPage.json';
import Popover from 'src/components/Popover';
import WithAuth from 'src/app/lib/firebase/auth/WithAuth';
import { connect } from 'react-redux';
import { compose } from 'redux';
import moment from 'moment';

export const Home = ({ isAuthenticated, lastCheckin }) => {
  const showPopover = moment().subtract(6, 'hours') > moment(+lastCheckin);

  return (
    <>
      {isAuthenticated && showPopover && <Popover />}
      <Admin pageTitle={data.page_title}>
        <Link href='/survey/[step]' as='/survey/welcome'>
          <a>Take The Symptoms Survey</a>
        </Link>
        <p>{data.page_body}</p>
      </Admin>
    </>
  );
};

const mapStateToProps = state => {
  return {
    lastCheckin: state.profile.lastCheckin,
  };
};

export default compose(WithAuth, connect(mapStateToProps))(Home);
