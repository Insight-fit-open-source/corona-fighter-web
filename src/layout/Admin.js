import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Typography, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { actions } from 'src/store/definitions/session';
import IsProtectedPage from 'src/app/lib/firebase/auth/IsProtectedPage';
import Sidebar from 'src/layout/Sidebar';
import Styled from './styles';

const GeneralSettingsLayout = ({
  pageTitle,
  openMenu,
  closeMenu,
  menuIsOpen,
  children,
}) => (
  <Styled.Wrap>
    <Sidebar active={menuIsOpen} closeMenu={closeMenu} />
    <Styled.BodyGeneral>
      <div className='pageHeader'>
        <IconButton onClick={() => openMenu()} className='hamburger'>
          <MenuIcon />
        </IconButton>
        {pageTitle ? <Typography variant='h4'>{pageTitle}</Typography> : null}
      </div>
      {children}
    </Styled.BodyGeneral>
  </Styled.Wrap>
);

const mapState = state => ({
  menuIsOpen: state.session.menuIsOpen,
});

const mapDispatch = dispatch => ({
  openMenu: () => dispatch(actions.setMenuState({ menuIsOpen: true })),
  closeMenu: () => dispatch(actions.setMenuState({ menuIsOpen: false })),
});

export default compose(
  IsProtectedPage,
  connect(mapState, mapDispatch),
)(GeneralSettingsLayout);
