import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Typography, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { actions } from 'src/store/definitions/session';
import IsProtectedPage from 'src/app/lib/firebase/auth/IsProtectedPage';
import Sidebar from 'src/layout/Sidebar';
import Social from 'src/components/common/Social';
import Base from './Base';
import Styled from './styles';

const GeneralSettingsLayout = ({
  pageTitle,
  openMenu,
  closeMenu,
  menuIsOpen,
  children,
  isMap = false,
}) => (
  <Base>
    <Styled.Wrap>
      <Sidebar active={menuIsOpen} closeMenu={closeMenu} />
      <Styled.BodyGeneral isMap={isMap}>
        <div className='pageHeader'>
          <IconButton onClick={() => openMenu()} className='hamburger'>
            <MenuIcon />
          </IconButton>
          {pageTitle ? <Typography variant='h4'>{pageTitle}</Typography> : null}
          <Social right={true} hideOnMobile={true} />
        </div>
        {children}
      </Styled.BodyGeneral>
    </Styled.Wrap>
  </Base>
);

const mapState = state => ({
  menuIsOpen: state.session.menuIsOpen,
});

const mapDispatch = dispatch => ({
  openMenu: () => dispatch(actions.setMenuState({ menuIsOpen: true })),
  closeMenu: () => dispatch(actions.setMenuState({ menuIsOpen: false })),
});

export default compose(connect(mapState, mapDispatch))(GeneralSettingsLayout);
