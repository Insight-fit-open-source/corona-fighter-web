import React from 'react';
import Link from 'next/link';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Button, Typography } from '@material-ui/core';
import ButtonIcon from '@material-ui/icons/ChevronRight';
import Dialog from '@material-ui/core/Dialog';

import moment from 'moment';
import WithAuth from 'src/app/lib/firebase/auth/WithAuth';
import { actions } from 'src/store/definitions/profile';
import data from 'forestry/data/popover.json';
import VirusBg from 'src/components/common/VirusBg';
import Styled from './styles';

const Popover = props => {
  const { checkin, isAuthenticated, lastCheckin, onBoardingComplete } = props;

  const showPopover =
    isAuthenticated &&
    moment().subtract(6, 'hours') > moment(+lastCheckin) &&
    onBoardingComplete;
  const [open, setOpen] = React.useState(Boolean(showPopover));

  const handleClose = () => {
    checkin();
    setOpen(false);
  };

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}>
      <VirusBg styles={{ zIndex: 100 }} />
      <Styled.PopoverContent>
        <Styled.PopoverBody>
          <Typography variant='h1'>{data.heading}</Typography>
          <Typography variant='body1'>{data.body}</Typography>
          <Link href='/survey/[step]' as='/survey/feeling'>
            <Button
              variant='contained'
              color='primary'
              endIcon={<ButtonIcon />}>
              {data.not_ok_button_text}
            </Button>
          </Link>
          <Button variant='outlined' color='secondary' onClick={handleClose}>
            {data.ok_button_text}
          </Button>
        </Styled.PopoverBody>
      </Styled.PopoverContent>
    </Dialog>
  );
};

const mapState = state => ({
  lastCheckin: state.profile.lastCheckin,
  onBoardingComplete: state.profile.onBoardingComplete,
});

const mapDispatch = dispatch => ({
  checkin: () => dispatch(actions.checkin()),
});

export default compose(WithAuth, connect(mapState, mapDispatch))(Popover);
